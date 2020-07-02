import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign: "center"
    },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#080307'),
    backgroundColor: '#080307',
    fontFamily: 'Crete Round',
    '&:hover': {
      backgroundColor: '#080307',
    },
  },
}))(Button);


export default function Answer(props) {
    const classes = useStyles();

    const handleClick = () => {
    	props.setToggle(false);
    	props.setAnswer("");
    }

    return (
        <div>

            <Modal
                className={classes.modal}
                open={props.toggle}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.toggle}>
                    <div className={classes.paper}>
                        <p>Demit menjawab</p>
                        <h1>{props.answer}</h1>
                        <ColorButton onClick={handleClick} variant="contained" >
						  Tanya Lagi
						</ColorButton>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}