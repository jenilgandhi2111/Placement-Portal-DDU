import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { useHistory } from 'react-router';
import { Grid, Button } from '@material-ui/core';
import { IconCirclePlus } from '@tabler/icons';
import { grey, red } from '@mui/material/colors';
import { blue, lightBlue } from '@material-ui/core/colors';
import ViewConfig from "../../../Config/ViewConfig"

const WhiteTextTypography = withStyles({
    root: {
        color: '#FFFFFF'
    }
})(Typography);

// button color
const color = blue[300]

function EmptyInternships() {
    const history = useHistory();

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={10}>
                    <WhiteTextTypography variant={ViewConfig.admin.student.student_profile.internships.no_internship_message.variant}>{ViewConfig.admin.student.student_profile.internships.no_internship_message.message}</WhiteTextTypography>
                </Grid>
                {/* <Grid item xs={12} md={2}>
                    <Button
                        style={{backgroundColor: color}}
                        variant="contained"
                        size="large"
                        startIcon={<IconCirclePlus />}
                        // color={color}
                        onClick={() => {
                            history.push('/student/add_student');
                        }}
                    >
                        {' '}
                        Add{' '}
                    </Button>
                </Grid> */}
            </Grid>
        </>
    );
}

export default EmptyInternships;
