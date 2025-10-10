import {  Minus, X } from "lucide-react";
import { Expand } from "./icons";

export function MacTitle(){
    return <div className="flex items-center gap-2">
        <div className="bg-secondary flex items-center justify-center transition duration-200 rounded-full p-0.5 text-transparent hover:text-muted-foreground">
            <X className="w-3 h-3"/>
        </div>
        <div className="bg-secondary flex items-center justify-center transition duration-200 rounded-full p-0.5 text-transparent hover:text-muted-foreground">
            <Minus className="w-3 h-3"/>
        </div>
        <div className="bg-secondary flex items-center justify-center transition duration-200 rounded-full p-1 text-transparent hover:text-muted-foreground">
            <Expand className="w-2 h-2"/>
        </div>
    </div>
}