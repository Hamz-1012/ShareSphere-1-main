'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Label, TextInput, FileInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { createBook } from '../../services/apiBooks';

function UploadPage() {
  const { register, handleSubmit, reset, formState } = useForm();
  const queryClient = useQueryClient();
  const { errors } = formState;
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      console.log('book was successfully created');
      queryClient.invalidateQueries({ queryKey: ['books'] });
      reset();
    },
    onError: (err) => {
      console.error(err.message);
    },
  });

  function onSubmit(data) {
    mutate({ ...data, book: data.book[0] });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <div>
      <form
        className="m-auto mt-20 flex max-w-md flex-col gap-4"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Title" />
          </div>
          <TextInput
            id="title"
            required
            shadow
            type="text"
            {...register('title', {
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'minimum length of 3 characters is required',
              },
            })}
          />
          {errors?.title?.message && (
            <div className="text-red-600">{errors.title.message}</div>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="author" value="Author" />
          </div>
          <TextInput
            id="author"
            required
            shadow
            type="text"
            {...register('author', {
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'minimum length of 3 characters is required',
              },
            })}
          />
          {errors?.author?.message && (
            <div className="text-red-600">{errors.author.message}</div>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="category" value="Enter Category" />
          </div>
          <TextInput
            id="category"
            required
            shadow
            type="category"
            {...register('category', {
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'minimum length of 3 characters is required',
              },
            })}
          />
          {errors?.category?.message && (
            <div className="text-red-600">{errors.category.message}</div>
          )}
        </div>

        <div className="max-w-md" id="fileUpload">
          <div className="mb-2 block">
            <Label htmlFor="book" value="Upload book" />
          </div>
          <FileInput
            helperText="Upload the book here"
            id="book"
            {...register('book', {
              required: 'This field is required',
            })}
          />
        </div>
        <Button disabled={isCreating} color="success" type="submit">
          Upload
        </Button>
      </form>
    </div>
  );
}

export default UploadPage;
