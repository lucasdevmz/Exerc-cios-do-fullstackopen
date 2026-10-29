```mermaid
sequenceDiagram
participant browser
participant server

Note over browser: On user click in the link https://studies.cs.helsinki.fi/exampleapp/spa

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->>browser: HTML Document

browser->>server: GET https://studies.cs.helsinki.fi/exempleapp/main.css
server-->>browser: CSS File

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->>browser: File spa.js

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->>browser: File data.json
<<<<<<< HEAD
```
=======
```
>>>>>>> 38eb146a032e62fbdc60c975c60a1caef30d21fe
