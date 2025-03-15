import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


import React from 'react'
interface ActionModelProps {
    children: React.ReactNode;
    triger: React.ReactNode;
    title: string;
    desc: string;
    onclick: () => void;
    open: boolean;
    setopen: (open: boolean) => void;
    btntext?: string;
}

function ActionModel({
    children, triger, title, desc, onclick, open, setopen, btntext
}: ActionModelProps) {
    return (
        <div>
            <AlertDialog open={open} onOpenChange={setopen}>
                <AlertDialogTrigger>{triger}</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{title}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {desc}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    {children}
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        {btntext && (
                            <AlertDialogAction onClick={onclick}>{btntext}</AlertDialogAction>
                        )}
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default ActionModel
