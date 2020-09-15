import React, { useState } from 'react';
import { addDays, getDay, format } from "date-fns"
import { fr } from 'date-fns/locale'
import Select from 'react-select'
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css";

const dayNameToNumber = ( name ) =>(
    ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"].indexOf(name)
)

function numberToEuroPrice( number = 0 ) {
    return number % 1 > 0
        ? number.toString().replace(".", "€").replace(/€(\d)$/, "€$10")
        : `${number}€`
}

function ListingDetailsSidebar({ restaurant }) {
    const [selectedDate, setDate] = useState();
    const [selectedTime, setTime] = useState();
    const [isTimepickerDisabled, setTimepickerDisabled] = useState(true)
    const [timepickerOptions, setTimepickerOptions] = useState([])
    const [menus, setMenus] = useState(restaurant.menus.map(() => 0))
    const [isCgvChecked, setIsCgvChecked] = useState(false)
    const today = new Date();
    const inTwoMonths = addDays(new Date(), 60)
    const openingDays = Object.keys(restaurant.creneaux).map(( creneau ) => dayNameToNumber(creneau.split(" ")[0]))
    const isOpen = (date) => ( openingDays.includes(getDay(date)) )
    const handleDateChange = (date) => {
        setDate(date)
        setTimepickerDisabled(false)
        setTime(null)

        const timeslots =
            Object.keys(restaurant.creneaux)
                .filter((key) => dayNameToNumber(key.split(" ")[0]) === getDay(date))
                .map((key) => restaurant.creneaux[key])
                .flat()
                .map((time) => ({ value: time.replace("h", ":").padEnd(5, "0"), label: time }))

        setTimepickerOptions(timeslots)
    }
    const handleMenuChange = ({ currentTarget: { dataset: { key }, value } }) => {
        setMenus(menus.map((val , i) => i === parseInt(key) ? value : val))
    }
    const handleCgvChange = () => {
        setIsCgvChecked(!isCgvChecked)
    }

    const getTotal = () => (
        menus.reduce((sum, nbMenu, idMenu) => (
            sum + ( restaurant.menus[idMenu].prix * nbMenu )
        ), 0)
    )
    const isSubmitDisabled = () => (
        selectedDate == null || selectedTime == null || isCgvChecked === false || getTotal() === 0
    )
    const getFormUrl = () => (
        (!isSubmitDisabled())
            ? [
                "https://tripetto.app/run/E7I87U7J8X",
                `?placeId=${restaurant.id}`,
                `&placeName=${restaurant.title}`,
                `&date=${encodeURIComponent(format(selectedDate, "dd/MM/yyyy"))}`,
                `&time=${selectedTime.label}`,
                ...(menus.map((nbMenu, idMenu) => (
                    nbMenu
                        ? `&menu${idMenu}=${encodeURIComponent(restaurant.menus[idMenu].menu)}%20x${nbMenu}`
                        : ""
                ))),
                `&displayedTotal=${getTotal()}`,
                `&isCgvChecked=${isCgvChecked}`,
            ].join("")
            : "#nogo"
    )
    const getTarget = () => (!isSubmitDisabled()) ? "_blank" : ""

    return (
        <>
            <div className="sidebar section-bg">
                <div className="contact-form-action">
                    <div className="form-group">
                        <DatePicker
                            selected={selectedDate}
                            placeholderText="Date de réservation"
                            onChange={handleDateChange}
                            startDate={today}
                            endDate={inTwoMonths}
                            filterDate={isOpen}
                            locale={fr}
                        />
                    </div>
                </div>

                <div className="time-slots padding-bottom-30px">
                    <Select className="select-wrapper"
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
                                <li className="card-item" key={key}>
                                    <div className="card-title">{menu.menu}</div>
                                    <div className="card-sub d-flex justify-content-between">
                                        <span className="color-text">{numberToEuroPrice(menu.prix)}</span>
                                        <span className="">
                                            <input style={{ width: "60px" }} type="number"
                                                data-key={key}
                                                value={menus[key]}
                                                onChange={handleMenuChange}
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
                        <input id="checkbox-cgv" type="checkbox"
                            onChange={handleCgvChange}
                            checked={isCgvChecked}
                        />
                        &nbsp;J'ai lu et j'accepte les <a href="#nogo">Conditions Générales de Vente</a>
                    </label>
                </div>

                <div className="btn-box text-center padding-bottom-20px">
                    <a className="theme-btn d-block" href={getFormUrl()} target={getTarget()}>Réserver</a>
                </div>

                <div className="card-item">
                    <div className="card-title">Total</div>
                    <div className="card-sub d-flex justify-content-between">
                        <span className="">Règlement au restaurant</span>
                        <span className="color-text">
                            {numberToEuroPrice(getTotal())}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListingDetailsSidebar;