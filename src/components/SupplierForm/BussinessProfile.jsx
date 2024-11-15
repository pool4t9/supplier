import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import * as yup from 'yup';

const step2Schema = yup.object().shape({
  businessName: yup.string().required('Business name is required'),
  businessTaxId: yup.string().required('Business tax ID is required'),
  addressLine1: yup.string().required('Address Line 1 is required'),
  addressLine2: yup.string(),
  pinCode: yup.string().required('PinCode is required'),
  city: yup.string().required('City is required'),
  country: yup.string().required('Country is required'),
  website: yup.string().url('Invalid URL'),
  email: yup.string().email('Invalid email').required('Email is required'),
  businessCategory: yup.string().required('Business category is required'),
  sector: yup.string().required('Sector is required'),
  premisesType: yup.string().required('Premises type is required'),
  premisesName: yup.string().required('Premises name is required'),
  productsServices: yup.string().required('Product/Service is required'),
});

const BussinessProfile = ({ onNext, onPrevious, saveData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(step2Schema),
    mode: 'onTouched',
  });

  const onSubmit = (data) => {
    saveData(data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-2'>
        <label>Business Name</label>
        <input
          type='text'
          {...register('businessName')}
          className={`form-control ${errors.businessName ? 'is-invalid' : ''}`}
        />
        <div className='invalid-feedback'>{errors.businessName?.message}</div>
      </div>

      <div className='mb-2'>
        <label>Business Tax ID</label>
        <input
          type='text'
          {...register('businessTaxId')}
          className={`form-control ${errors.businessTaxId ? 'is-invalid' : ''}`}
        />
        <div className='invalid-feedback'>{errors.businessTaxId?.message}</div>
      </div>

      <div className='row'>
        <div className='mb-2'>
          <label>Business Address</label>
          <input
            type='text'
            {...register('addressLine1')}
            placeholder='Address Line 1'
            className={`form-control ${
              errors.addressLine1 ? 'is-invalid' : ''
            }`}
          />
          <div className='invalid-feedback'>{errors.addressLine1?.message}</div>
        </div>
        <div className='mb-2'>
          <input
            type='text'
            {...register('addressLine2')}
            placeholder='Address Line 2'
            className='form-control'
          />
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-4 mb-2'>
          <label>PinCode</label>
          <input
            type='text'
            {...register('pinCode')}
            className={`form-control ${errors.pinCode ? 'is-invalid' : ''}`}
          />
          <div className='invalid-feedback'>{errors.pinCode?.message}</div>
        </div>

        <div className='col-sm-4 mb-2'>
          <label>City</label>
          <input
            type='text'
            {...register('city')}
            className={`form-control ${errors.city ? 'is-invalid' : ''}`}
          />
          <div className='invalid-feedback'>{errors.city?.message}</div>
        </div>

        <div className='col-sm-4 mb-2'>
          <label>Country</label>
          <input
            type='text'
            {...register('country')}
            className={`form-control ${errors.country ? 'is-invalid' : ''}`}
          />
          <div className='invalid-feedback'>{errors.country?.message}</div>
        </div>
      </div>

      <div className='mb-2'>
        <label>Website</label>
        <input
          type='url'
          {...register('website')}
          className={`form-control ${errors.website ? 'is-invalid' : ''}`}
        />
        <div className='invalid-feedback'>{errors.website?.message}</div>
      </div>

      <div className='mb-2'>
        <label>Email</label>
        <input
          type='email'
          {...register('email')}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
        <div className='invalid-feedback'>{errors.email?.message}</div>
      </div>

      <div className='mb-2'>
        <label>Business Category</label>
        <input
          type='text'
          {...register('businessCategory')}
          className={`form-control ${
            errors.businessCategory ? 'is-invalid' : ''
          }`}
        />
        <div className='invalid-feedback'>
          {errors.businessCategory?.message}
        </div>
      </div>

      <div className='mb-2'>
        <label>Sector</label>
        <select
          {...register('sector')}
          className={`form-control ${errors.sector ? 'is-invalid' : ''}`}
        >
          <option value=''>Select Sector</option>
          <option value='manufacturing'>Manufacturing</option>
          <option value='service'>Service</option>
          <option value='retail'>Retail</option>
          <option value='wholesale'>Wholesale</option>
        </select>
        <div className='invalid-feedback'>{errors.sector?.message}</div>
      </div>

      <div className='mb-2'>
        <label>Premises Type</label>
        <div>
          <label>
            <input
              type='radio'
              value='individual'
              {...register('premisesType')}
            />
            Individual Premises
          </label>
          <label>
            <input type='radio' value='group' {...register('premisesType')} />
            Group of Business Premises (Malls)
          </label>
        </div>
        <div className='invalid-feedback'>{errors.premisesType?.message}</div>
      </div>

      {watch('premisesType') == 'group' && (
        <div className='mb-2'>
          <label>Sector</label>
          <select
            {...register('sector')}
            className={`form-control ${errors.sector ? 'is-invalid' : ''}`}
          >
            <option value=''>Select Sector</option>
            <option value='manufacturing'>Manufacturing</option>
            <option value='service'>Service</option>
            <option value='retail'>Retail</option>
            <option value='wholesale'>Wholesale</option>
          </select>
          <div className='invalid-feedback'>{errors.sector?.message}</div>
        </div>
      )}

      <div className='mb-2'>
        <label>Premises Name</label>
        <input
          type='text'
          {...register('premisesName')}
          className={`form-control ${errors.premisesName ? 'is-invalid' : ''}`}
        />
        <div className='invalid-feedback'>{errors.premisesName?.message}</div>
      </div>

      <div className='mb-2'>
        <label>Products / Services</label>
        <select
          {...register('productsServices')}
          className={`form-control ${errors.sector ? 'is-invalid' : ''}`}
        >
          <option value=''>Select Type</option>
          <option value='products'>Products</option>
          <option value='services'>Services</option>
          <option value='both'>Both</option>
        </select>
        <div className='invalid-feedback'>{errors.sector?.message}</div>
      </div>

      {/* Additional category and sub-category checkboxes */}
      {/* Implement checkboxes similar to this format */}
      <button
        type='button'
        className='btn btn-secondary me-2'
        onClick={onPrevious}
      >
        Previous
      </button>
      <button type='submit' className='btn btn-primary my-2'>
        Next
      </button>
    </form>
  );
};

BussinessProfile.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  saveData: PropTypes.func.isRequired,
};

export default BussinessProfile;
