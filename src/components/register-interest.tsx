"use client"

import { register } from "@/app/actions/register"
import { cn } from "@/lib/utils"
import { motion } from 'framer-motion'
import React, { HTMLAttributes } from "react"
import { useFormState } from "react-dom"

interface RegisterInterstProps extends HTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
    className?: string;
    successComponent: React.ReactNode;
}

export function RegisterInterest({
    children,
    className,
    successComponent,
    ...rest
}: RegisterInterstProps) {
    const [state, formAction] = useFormState(register, {
        error: "",
        success: false
    })

    return (
        <React.Fragment>
            <form
                action={formAction}
                className={cn("relative w-full", className)}
                {...rest}
            >
                <motion.div
                    key="form"
                    animate={state.success ? "hidden" : "showing"}
                    variants={{
                        showing: {
                            opacity: 1,
                            transitionEnd: {
                                display: "block"
                            }
                        },
                        hidden: {
                            opacity: 0,
                            transitionEnd: {
                                display: "none"
                            }
                        }
                    }}
                >
                    {children}
                </motion.div>
                <motion.div
                    key="success"
                    initial={{
                        opacity: 0,
                        display: "none"
                    }}
                    animate={!state.success ? "hidden" : "showing"}
                    variants={{
                        showing: {
                            opacity: 1,
                            transitionEnd: {
                                display: "block"
                            }
                        },
                        hidden: {
                            opacity: 0,
                            transitionEnd: {
                                display: "none"
                            }
                        }
                    }}
                >
                    {successComponent}
                </motion.div>
            </form>
        </React.Fragment>
    )
}