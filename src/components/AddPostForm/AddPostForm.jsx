import React from 'react';
import './AddPostForm.css';
import { useForm } from 'react-hook-form';

export const AddPostForm = (props) => {
  const { register, handleSubmit, formState, reset } = useForm({
    values: {
      title: '',
      body: '',
    },
  });
  const fieldsConfig = {
    required: 'true',
    minLength: 6,
  };
  const onSubmit = (data) => {
    props.handleAddPost(data);
    reset({ title: '', body: '' });
  };

  return (
    <form
      className="post_add_form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>
        Title
        {formState.errors.title?.type === 'required' && (
          <span> is required</span>
        )}
        {formState.errors.title?.type === 'minLength' && (
          <span> is too short</span>
        )}
        <input type="text" name="title" {...register('title', fieldsConfig)} />
      </label>
      <label>
        Body
        {formState.errors.body?.type === 'required' && (
          <span> is required</span>
        )}
        {formState.errors.body?.type === 'minLength' && (
          <span> is too short</span>
        )}
        <input type="text" name="body" {...register('body', fieldsConfig)} />
      </label>
      <button>Add</button>
    </form>
  );
};
