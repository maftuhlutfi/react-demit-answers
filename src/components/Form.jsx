import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import capitalize from './capitalizeFirstWord';

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

export default function Form({setToggle, setAnswer}) {
	const defMantra = "Demit jawaben pitakonan iki!";

	const [mantra, setMantra] = useState("");
	const [question, setQuestion] = useState("");
	const [isAnswer, setIsAnswer] = useState(false);
	const [invalid, setInvalid] = useState(false);
	const [invalidText, setInvalidText] = useState("");

	const handleClick = () => {
		if (mantra !== "" && question !== "") {
			setToggle(true);
			setInvalid(false);
			setMantra("");
			setQuestion("");
			setIsAnswer(false);
		} else {
			setInvalid(true);
			if (mantra === "") {
				setInvalidText("Mantranyaa woyyy!");
			} else {
				setInvalidText("Pertanyaannya woyyy!");
			}
		}
	}

	const changeMantra = e => {
		let {value} = e.target;
		value = capitalize(value);
		const length = value.length;

		if (isAnswer) {
			!value.includes(".") && setAnswer(prev => {
				let answer = prev + value.charAt(length-1);
				return capitalize(answer);
			})
			setMantra(prev => {
				return prev + defMantra.charAt(length-1);
			});
		} else {
			if (value.includes('.')) {
				setMantra(prev => {
					return prev + defMantra.charAt(length-1);
				});
			} else {
				setMantra(value);
			}
		}
		
	}

	const changeQuestion = e => {
		const {value} = e.target;
		setQuestion(() => capitalize(value));
	}

	return (
		<div className="Form">
			<TextField 
				fullWidth
				id="mantra"
				color= "secondary" 
				placeholder="Masukkan mantra"  
				style={{marginBottom: "20px"}}
				onChange={changeMantra}
				onKeyDown={e => e.key === "." && setIsAnswer(() => !isAnswer)}
				value={mantra}
				spellCheck="false"
			/>
			
			<Grid container spacing={3}>
        		<Grid item xs={12} sm={12} md={10}>
					<TextField
						id="question"
						color= "secondary" 
						placeholder="Masukkan pertanyaan" 
						fullWidth
						value={question}
						onChange={changeQuestion}
						onKeyDown={e => e.key === "?" && handleClick()}
						spellCheck="false"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={2}>
					<ColorButton onClick={handleClick} variant="contained" >
					  Tanya
					</ColorButton>
				</Grid>
			</Grid>
			{invalid && <p style={{marginBottom: "-2%", color: "red"}} >{invalidText}</p>}
		</div>
	)
}