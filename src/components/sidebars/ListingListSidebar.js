import React from 'react';
import WidgetSearch from "./widgets/WidgetSearch";
import WidgetFilterCategory from "./widgets/WidgetFilterCategory";
import WidgetFilterPrice from "./widgets/WidgetFilterPrice";
import WidgetFilterTags from "./widgets/WidgetFilterTags";
import WidgetFilterFeatures from "./widgets/WidgetFilterFeatures";
import WidgetSortBy from "./widgets/WidgetSortBy";
import WidgetFilterRatings from "./widgets/WidgetFilterRatings";
import WidgetPostedBy from "./widgets/WidgetPostedBy";
import Button from "../common/Button";
import { BsChevronRight } from 'react-icons/bs'

function ListingListSidebar() {
    return (
        <>
            <div className="sidebar">
                <WidgetFilterCategory />
                <WidgetSortBy />
            </div>
        </>
    );
}

export default ListingListSidebar;