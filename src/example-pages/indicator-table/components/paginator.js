import React from 'react';
import {Pagination} from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n'



export default function CustomPagination({pager , setPageSize, setPage}){
    const {page, pageCount, pageSize, total} = pager;

    return (
        <Pagination
            dataTest="dhis2-uiwidgets-pagination"
            nextPageText={function nextPageText(){return i18n.t("Next")}}
            onPageChange={setPage}
            onPageSizeChange={setPageSize}
            page={page}
            pageCount={pageCount}
            pageSelectText={function pageSelectText(){return i18n.t("Page")}}
            pageSize={pageSize}
            pageSizeSelectText={function pageSizeSelectText(){return i18n.t("Items per page")}}
            pageSizes={[
                '5',
                '10',
                '20',
                '30',
                '40',
                '50',
                '75',
                '100'
            ]}
            pageSummaryText={function pageSummaryText(interpolationObject){return i18n.t("Page {{page}} of {{pageCount}}, items {{firstItem}}-{{lastItem}} of {{total}}",interpolationObject)}}
            previousPageText={function previousPageText(){return i18n.t("Previous")}}
            total={total}
        />
    )
}
