"use client";
import React, { useState } from 'react'
import ActionModel from './ActionModel'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import { SelectGroup, SelectLabel } from '@radix-ui/react-select';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const customers = [
    { id: 1, name: "Lakruwan", username: "customer1", amount: 100, status: "active" },
    { id: 2, name: "Prashanji", username: "customer2", amount: 150, status: "inactive" },
    { id: 3, name: "Liwinu", username: "customer3", amount: 200, status: "active" },
];


const formSchema = z.object({
    username: z.string().min(2, {
        message: "name is required",
    }),
    anount: z.string().min(2, {
        message: "anount is required",
    }),
    Status: z.string().min(2, {
        message: "Status is required",
    }),
})

const CreateInvoice = () => {
    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            anount: "",
            Status: "unpaid",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const { name, anount, statue } = values;

        console.log(values)
    }

    return (
        <div>
            <ActionModel
                title='Create Invoice'
                desc='Create a new invoice'
                triger={
                    <button
                        className="bg-blue-500 flex items-center justify-center font-bold text-white w-26 h-10 rounded-2xl duration-500 hover:bg-blue-700 hover:title cursor-cell shadow-lg shadow-blue-950 active:shadow-none">ADD IN +
                    </button>
                }
                btntext='Create'
                open={open}
                setopen={setOpen}
                onclick={() => setOpen(true)}
            >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select the Costomer" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Coustomer</SelectLabel>
                                                <>
                                                    {customers?.map((Item) => {
                                                        const { name } = Item;
                                                        return (
                                                            <SelectItem key={Item.id} value={name}>{name}</SelectItem>
                                                        )
                                                    })}
                                                </>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="Status"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>Notify me about...</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="all" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    unpaid
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="mentions" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    paid
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className='bg-blue-600 w-full hover:bg-blue-950 hover:duration-500' type="submit">Submit</Button>
                    </form>
                </Form >
            </ActionModel >
        </div >
    )
}

export default CreateInvoice