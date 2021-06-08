import React, { useState } from 'react'
import { addDays, getDay, format, isToday, getHours } from 'date-fns'
import { fr } from 'date-fns/locale'
import Select from 'react-select'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const WEBHOOK_URL =
    'https://hook.integromat.com/ky8kxgjfcj12okupxur9y6bqnvc53rfn'

const dayNameToNumber = (name) =>
    // This will be matched with dateFns.getDay which returns 0 for Sunday
    [
        'dimanche',
        'lundi',
        'mardi',
        'mercredi',
        'jeudi',
        'vendredi',
        'samedi',
    ].indexOf(name)

function numberToEuroPrice(number = 0) {
    return number % 1 > 0
        ? number
              .toString()
              .replace('.', '€')
              .replace(/€(\d)$/, '€$10')
        : `${number}€`
}

const modesConso = [
    {
        label: 'Sur place (+0€)',
        value: 'eatIn',
    },
    {
        label: 'À emporter (+0€)',
        value: 'takeAway',
    },
    {
        label: 'Livraison dans un rayon de 3kms (+4€)',
        value: 'delivery',
    },
]

function ListingDetailsSidebar({ restaurant }) {
    const [selectedDate, setDate] = useState()
    const [selectedTime, setTime] = useState()
    const [selectedConso, setConso] = useState()
    const [isTimepickerDisabled, setTimepickerDisabled] = useState(true)
    const [timepickerOptions, setTimepickerOptions] = useState([])
    const [menus, setMenus] = useState(restaurant.menus.map(() => 0))
    const [isCgvChecked, setIsCgvChecked] = useState(false)
    const today = new Date()
    const inTwoMonths = addDays(new Date(), 60)
    const openingDays = Object.keys(restaurant.creneaux).map((creneau) =>
        dayNameToNumber(creneau.split(' ')[0])
    )
    const isOpen = (date) => openingDays.includes(getDay(date))
    const handleDateChange = (date) => {
        setDate(date)
        setTimepickerDisabled(false)
        setTime(null)

        const currentHours = getHours(new Date())
        const timeslots = Object.keys(restaurant.creneaux)
            .filter(
                (key) => dayNameToNumber(key.split(' ')[0]) === getDay(date)
            )
            .map((key) => restaurant.creneaux[key])
            .flat()
            .filter(
                (time) =>
                    !isToday(date) ||
                    currentHours +
                        (selectedConso?.value === 'delivery' ? 3 : 2) <=
                        Number(time.replace(/h\d*/, ''))
            )
            .map((time) => ({
                value: time.replace('h', ':').padEnd(5, '0'),
                label: time,
            }))

        setTimepickerOptions(timeslots)
    }
    const handleMenuChange = ({
        currentTarget: {
            dataset: { key },
            value,
        },
    }) => {
        setMenus(menus.map((val, i) => (i === parseInt(key) ? value : val)))
    }
    const handleCgvChange = () => {
        setIsCgvChecked(!isCgvChecked)
    }

    const getTotal = () =>
        menus.reduce(
            (sum, nbMenu, idMenu) =>
                sum + restaurant.menus[idMenu].prix * nbMenu,
            selectedConso?.value === 'delivery' ? 4 : 0
        )
    const isSubmitDisabled = () =>
        selectedDate == null ||
        selectedTime == null ||
        isCgvChecked === false ||
        getTotal() === 0
    const getQueryString = (dateFormat = 'yyyy-MM-dd') => {
        return [
            `restoId=${restaurant.id}`,
            `restoName=${restaurant.title}`,
            `resaDate=${encodeURIComponent(format(selectedDate, dateFormat))}`,
            `resaTime=${selectedTime.label}`,
            `consumingMode=${selectedConso.value}`,
            `isCgvChecked=${isCgvChecked}`,
            `total=${getTotal()}`,
            `order=${encodeURIComponent(
                menus
                    .filter((nbMenu) => nbMenu > 0)
                    .map(
                        (nbMenu, idMenu) =>
                            `${restaurant.menus[idMenu].menu} x ${nbMenu}`
                    )
                    .join('\n\n')
            )}`,
            `isTest=${process.env.NODE_ENV !== 'production'}`,
        ].join('&')
    }
    const getFormUrl = () =>
        !isSubmitDisabled()
            ? `${WEBHOOK_URL}?${getQueryString('dd/MM/yyyy')}`
            : '#nogo'
    const getTarget = () => (!isSubmitDisabled() ? '_blank' : '')

    return (
        <>
            <div className="sidebar section-bg">
                <div className="mode padding-bottom-20px">
                    <Select
                        className="select-wrapper"
                        value={selectedConso}
                        onChange={setConso}
                        placeholder="Mode de consommation"
                        options={modesConso}
                    />
                </div>

                <div className="contact-form-action padding-bottom-20px">
                    <DatePicker
                        selected={selectedDate}
                        placeholderText="Date de réservation"
                        onChange={handleDateChange}
                        startDate={today}
                        endDate={inTwoMonths}
                        filterDate={isOpen}
                        locale={fr}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

                <div className="time-slots padding-bottom-30px">
                    <Select
                        className="select-wrapper"
                        value={selectedTime}
                        onChange={setTime}
                        placeholder="Heure de réservation"
                        isDisabled={isTimepickerDisabled}
                        options={timepickerOptions}
                    />
                </div>

                <div className="menus padding-bottom-30px">
                    <ul>
                        {restaurant.menus.map((menu, key) => {
                            return (
                                <li
                                    className="card-item padding-bottom-20px"
                                    key={key}
                                >
                                    <div className="card-title">
                                        {menu.menu}
                                    </div>
                                    <div className="card-sub d-flex justify-content-between">
                                        <span className="color-text padding-top-5px">
                                            {numberToEuroPrice(menu.prix)}
                                        </span>
                                        <span className="">
                                            <input
                                                style={{ width: '60px' }}
                                                type="number"
                                                data-key={key}
                                                value={menus[key]}
                                                onChange={handleMenuChange}
                                                min="0"
                                            />
                                        </span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="padding-bottom-20px">
                    <label htmlFor="checkbox-cgv">
                        <input
                            id="checkbox-cgv"
                            type="checkbox"
                            onChange={handleCgvChange}
                            checked={isCgvChecked}
                        />
                        &nbsp;J'ai lu et j'accepte les{' '}
                        <a
                            href="https://www.res-and-co.fr/CGU/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Conditions Générales de Vente
                        </a>
                        *
                    </label>
                </div>

                <div className="btn-box text-center padding-bottom-20px">
                    <a
                        className="theme-btn d-block"
                        href={getFormUrl()}
                        target={getTarget()}
                    >
                        Réserver
                    </a>
                </div>

                <div className="card-item">
                    <div className="card-title">Total</div>
                    <div className="card-sub d-flex justify-content-between">
                        <span className="">Règlement en ligne</span>
                        <span className="color-text">
                            {numberToEuroPrice(getTotal())}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListingDetailsSidebar
