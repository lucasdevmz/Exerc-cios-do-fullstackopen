sequenceDiagram
participant browser
participant server

Note over browser: User writes a note and clicks save

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
server-->>browser: 201 created