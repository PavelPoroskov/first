
from
https://www.bignerdranch.com/blog/react-data-layer-part-8/

my goals:
How to store the access token securely

rewrite
try new Redux API react hooks

my changes:
===========
view component and redux container in one folder
-- > view component in components/*, redux containers in ScreenApp/*

.Don't add game without title
add formik, yup 

Don't add the same game second time.
    submit form
  .if success (uniq title) then resetForm
  .else dont reset: user can edit title

  return focus in the field title

versions changes:
=================
materializeCSS 0.98.0 --> 1.0.0
react-materialize 2.6.0 --> 3.3.1
