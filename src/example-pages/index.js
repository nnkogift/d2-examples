import {Container, Grid} from "@material-ui/core";
import classes from "../App.module.css";
import {DataQuery, useConfig} from "@dhis2/app-runtime";
import {Button} from "@dhis2/ui";
import React from "react";
import i18n from '@dhis2/d2-i18n'
import history from "../history";


const query = {
    me: {
        resource: 'me',
    },
}

export default function MainApp() {
    const {baseUrl, apiVersion} = useConfig();
    return <Container>
        <Grid container spacing={3}>
            <Grid item sm={12}>
                <div className={classes.container}>
                    <DataQuery query={query}>
                        {({error, loading, data}) => {
                            console.log(data)
                            if (error) return <span>ERROR</span>
                            if (loading) return <span>...</span>
                            return (
                                <>
                                    <h1>
                                        {i18n.t('Hello {{name}}', {name: data.me.name})}
                                    </h1>
                                    <h3>{i18n.t('Welcome to DHIS2!')}</h3>
                                    <p>Server: {i18n.t('{{baseUrl}}', {baseUrl})} &nbsp; Version: {i18n.t('{{apiVersion}}', {apiVersion})} </p>
                                </>
                            )
                        }}
                    </DataQuery>
                    <Grid direction='row' item container sm={12} spacing={2}>
                        <Grid item>
                            <Button primary onClick={_ => history.replace('/indicators')}>Open Indicator table</Button>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    </Container>
}
