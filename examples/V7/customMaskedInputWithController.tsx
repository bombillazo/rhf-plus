import React from 'react';
import MaskedInput from 'react-input-mask';
import { useForm, Controller } from '@bombillazo/rhf-plus';

import './styles.css';

export const clearTel = (tel) => tel.replace(/[^0-9]/g, '');

const isNotFilledTel = (v) => {
  const clearedTel = clearTel(v);
  return clearedTel.length < 11 ? 'Phone number is required.' : undefined;
};

const Input = (props) => {
  const { onChange, ...restProps } = props;
  return <input {...restProps} onChange={onChange} />;
};

const CustomMaskedInput = (props) => {
  const { value, onChange, name } = props;
  return (
    <MaskedInput
      name={name}
      value={value}
      mask="+7 (999) 999-99-99"
      maskPlaceholder={'_'}
      alwaysShowMask
      onChange={(e) => {
        e.persist();
        onChange(e.target.value);
      }}
    >
      {(inputProps) => (
        <Input {...inputProps} type="text" autoComplete="tel-national" />
      )}
    </MaskedInput>
  );
};

const onSubmit = (data) => {
  console.log('submit', data);
};

export default function App() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    reValidateMode: 'onSubmit',
    defaultValues: {
      ControlledMaskedInput: '7',
    },
  });
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            render={({ field }) => <CustomMaskedInput {...field} />}
            rules={{
              validate: {
                inputTelRequired: isNotFilledTel,
              },
            }}
            name="ControlledMaskedInput"
            control={control}
          />

          {errors.ControlledMaskedInput && (
            <p>{errors.ControlledMaskedInput.message}</p>
          )}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
