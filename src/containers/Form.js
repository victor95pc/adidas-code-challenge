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
import FormLabel from '@material-ui/core/FormLabel';
import { t } from 'i18next';

import SignUser from "../services/SignUser";
import GenderRadioGroup from '../components/GenderRadioGroup';

function formGenderRadioGroup({ gender, setGender, className }) {
  if (!t("form.showGenders")) { return null }

  return (
    <FormControl fullWidth>
      <FormLabel component="legend">{t("form.gender")}</FormLabel>
      <GenderRadioGroup gender={gender} setGender={setGender} className={className} />
    </FormControl>
  )
}

function checkboxReceiveNewsletter({ receiveNewsletter, setReceiveNewsletter }) {
  if (!t("form.showReceiveNewsletter")) { return null }

  return (
    <FormControlLabel
      control={(
        <Checkbox
          checked={receiveNewsletter}
          onChange={(_, checked) => setReceiveNewsletter(checked)}
          color="primary"
        />
      )}
      label={t("form.receiveNewsletter")}
    />
  )
}

function checkboxOlder18Years({ older18Years, setOlder18Years }) {
  if (!t("form.showOlder18Years")) { return null }

  return (
    <FormControlLabel
      control={(
        <Checkbox
          checked={older18Years}
          onChange={(_, checked) => setOlder18Years(checked)}
          color="primary"
          required
        />
      )}
      label={t("form.older18Years")}
    />
  )
}

function formEmailField({ email, setEmail }) {
  if (!t("form.showEmail")) { return null }

  return (
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="email">{t("form.email")}</InputLabel>
      <Input
        type="email"
        id="email"
        name="email"
        autoComplete="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        autoFocus
      />
    </FormControl>
  )
}

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
          {t("form.signIn")}
        </Typography>

        <form className={classes.form} onSubmit={onSubmit}>

          {formEmailField({ email, setEmail })}

          {checkboxOlder18Years({ older18Years, setOlder18Years })}

          {checkboxReceiveNewsletter({ receiveNewsletter, setReceiveNewsletter })}

          {formGenderRadioGroup({ gender, setGender, className: classes.genderRadioGroup })}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {t("form.signIn")}
          </Button>
        </form>
      </Paper>
    </main>
  );
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Form;