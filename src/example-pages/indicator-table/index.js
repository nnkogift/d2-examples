import React, {useState} from 'react';
import {Table, TableBody, TableCell, TableCellHead, TableHead, TableRow, TableRowHead} from "@dhis2/ui";
import CustomPagination from "./components/paginator";
import {DataQuery} from "@dhis2/app-runtime";
import {Container, Grid} from "@material-ui/core";


export function IndicatorTable() {
    const [pageSize, setPageSize] = useState(10);
    const [page, setPage] = useState(1);

    const query = {
        indicatorData: {
            resource: 'indicators',
            params: {
                pageSize,
                page,
                fields: [
                    'displayName',
                    'created',
                    'description',
                    'user[*]'
                ]
            }
        }
    }
    return (
        <DataQuery query={query}>
            {({error, loading, data}) => {
                return (loading ? <>Loading...</> : error ? <>Error: {error}</> :
                        <Container style={{paddingTop: 40}}>
                            <Grid container spacing={3}>
                                <Grid item sm={12}>
                                    <Table>
                                        <TableHead>
                                            <TableRowHead>
                                                <TableCellHead key={'indicator-name-header'}>
                                                    Indicator Name
                                                </TableCellHead>
                                                <TableCellHead key={'created-header'}>
                                                    Created At
                                                </TableCellHead>
                                                <TableCellHead key={'description-header'}>
                                                    Description
                                                </TableCellHead>
                                                <TableCellHead key={'created-by-header'}>
                                                    Created By
                                                </TableCellHead>
                                            </TableRowHead>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                data.indicatorData.indicators?.map((indicator, i) => (
                                                    <TableRow key={`indicator-${i}`}>
                                                        <TableCell key={`indicator-name-${i}`}>
                                                            {indicator.displayName}
                                                        </TableCell>
                                                        <TableCell key={`indicator-created-${i}`}>
                                                            {Date(indicator.created).toLocaleString()}
                                                        </TableCell>
                                                        <TableCell key={`indicator-description-${i}`}>
                                                            {indicator.description}
                                                        </TableCell>
                                                        <TableCell key={`indicator-created-by-${i}`}>
                                                            {indicator?.user?.displayName}
                                                        </TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </Grid>
                                <Grid item sm={12}>
                                    <CustomPagination pager={data.indicatorData.pager} setPage={setPage}
                                                      setPageSize={setPageSize}/>
                                </Grid>
                            </Grid>
                        </Container>
                )
            }}
        </DataQuery>
    )
}
