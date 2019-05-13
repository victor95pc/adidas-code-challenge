import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';

import SignUser from "../services/SignUser";

function Form(props) {
  const { classes } = props;

  const [email, setEmail]                         = useState("");
  const [older18Years, setOlder18Years]           = useState(false);
  const [receiveNewsletter, setReceiveNewsletter] = useState(false);
  const [gender, setGender]                       = useState("male");

  const onSubmit = (e) => {
    SignUser({ email, older18Years, receiveNewsletter, gender });
    e.preventDefault();
  }

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input type="email" id="email" name="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} autoFocus />
          </FormControl>

          <FormControlLabel
            control={<Checkbox checked={older18Years} onChange={(_, checked) => setOlder18Years(checked)} color="primary" required />}
            label="By law you must be older than 18 years old?"
          />

          <FormControlLabel
            control={<Checkbox checked={receiveNewsletter} onChange={(_, checked) => setReceiveNewsletter(checked)} color="primary" />}
            label="Receive a newsletter?"
          />

          <FormControl fullWidth>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup value={gender} onChange={(_, gender) => setGender(gender)} className={classes.genderRadioGroup} >
              <FormControlLabel
                value="male"
                control={<Radio value="male" aria-label="Male"  />}
                label="Male"
              />
              
              <FormControlLabel
                value="female"
                control={<Radio value="female" aria-label="Female"  />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
  );
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Form;