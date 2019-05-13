import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { t } from 'i18next';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default ({ gender, setGender, className }) => (
  <RadioGroup value={gender} onChange={(_, gender) => setGender(gender)} className={className}>
    <FormControlLabel
      value="male"
      control={<Radio value="male" aria-label={t("form.genders.male")} />}
      label={t("form.genders.male")}
    />

    <FormControlLabel
      value="female"
      control={<Radio value="female" aria-label={t("form.genders.female")} />}
      label={t("form.genders.female")}
    />
  </RadioGroup>
)