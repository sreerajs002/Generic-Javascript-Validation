1. ABOUT THIS APPLICATION
The Aim of this Application is "Generic JavaScript Form Validation Functions "

Here is the example fields I choose:

Sign up with us
FullName* -[length:min-5,max-10;type=alphanumeric]
NickName  -[accepts any alphanumeric]
Email*    -[accepts emails of any length]
Optional email-[accepts emails of any length]
Contact Number* -[length:min:10,max-10 chars;type:numeric]
Password* - [length:min-6,max-10chars;type:alphanumeric&symbols]
Confirm Password* - [length:min-6,max-10chars;type:alphanumeric&symbols]
Gender*- [length:only one is checkable;type:radio]
Areas of Interest*-[length:min-2 max-4 can be checkable;type:checkbox;]
Marital Status*-[length:only one is checkable;type:radio]
Location* - [length:only one is selectable;type:dropdown]
UserName* -[length:min & max char not defined ,default min=3,max-8char;type=alphanumeric]
Cources*-[length:min-1 max-2 can be checkable;type:checkbox;]

    [input: submit]

NOTE: if minimun and maximum characters are not defined it takes default characters.

2. WHAT THIS APPLICATION CONTAINS
Below is a list of files released as part of this build.

index.html - This is the file for Registration form. We took care to include all the various HTML elements in this form( textbox ,single combo , multi combo, Radio buttons, check box) and provided respective javasript validations.

style.css - this file contains the StyleSheet used to beautify our Application.

validate.js - this file contains Generic javascript validation code.

/include - this folder contains js and css directories.
/js -  this folder contains all js  files that are included in the application.
/css -  this folder contains all CSS files that are included in the application.

