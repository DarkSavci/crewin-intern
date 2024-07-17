import { Button as AntButton } from "antd";
import { twMerge } from 'tailwind-merge'

export default function Button(props: any) {
    return <AntButton className={twMerge(props.class, "!bg-button !text-white !border-0")} {...props}>
        {props.children}
    </AntButton>
}