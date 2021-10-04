import React from "react";
import Entry from "./Entry";

function CreatedEntry(emojipedia){
    return (
<Entry 
         key={emojipedia.id}
         name={emojipedia.name}
         emoji={emojipedia.emoji}
         meaning={emojipedia.meaning}

/>
    )
}
export default CreatedEntry;