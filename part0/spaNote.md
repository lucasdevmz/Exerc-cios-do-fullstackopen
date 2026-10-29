```mermaid
sequenceDiagram
participant browser
participant server

Note over browser: User writes a note and clicks save

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
server-->>browser: 201 created
<<<<<<< HEAD
```
=======
```
>>>>>>> 38eb146a032e62fbdc60c975c60a1caef30d21fe
