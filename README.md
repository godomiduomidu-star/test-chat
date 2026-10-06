# ZERO CHAT v1.1
by Omidu Dewditha

## Firebase Setup

### 1. Authentication
Console → Authentication → Sign-in method → **Anonymous** → Enable

### 2. Realtime Database Rules
Console → Realtime Database → Rules:
```json
{"rules":{
"users":{".read":"auth!=null",".write":"auth!=null"},
"chats":{".read":"auth!=null",".write":"auth!=null"},
"messages":{".read":"auth!=null",".write":"auth!=null"},
"typing":{".read":"auth!=null",".write":"auth!=null"},
"status":{".read":"auth!=null",".write":"auth!=null"},
"reports":{".read":"auth!=null",".write":"auth!=null"},
"config":{".read":"auth!=null",".write":"auth!=null"},
"admins":{".read":"auth!=null",".write":false}
}}