sequenceDiagram
participant browser
participant server

Note over browser: On user fill the form and click in "Submit" button.
browser->>server: POST /new-note
server-->>browser: Status code 302 found, redirect browser to GET https://studies.cs.helsinki.fi/exampleapp/notes
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->>browser: HTML Document
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>browser: File main.css
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->>browser: File main.js

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->>browser: File data.json