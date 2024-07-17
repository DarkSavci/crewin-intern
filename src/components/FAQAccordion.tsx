"use client";
import React, {ReactElement} from 'react';
import Image from 'next/image'
import down from '@/assets/down.svg'
import user from '@/assets/user.svg'
import building from '@/assets/building.svg';
import teacher from '@/assets/teacher.svg';

import {Collapse} from 'antd';

const {Panel} = Collapse;

export default function Collapsible({items}: {
    items: {
        category: 'Seafarer' | 'Company' | 'Cadet',
        title: string,
        answer: string
    }[]
}) {
    return <Collapse
        accordion
        bordered={false}
        className="!bg-white"
        expandIcon={({isActive}) => <ExpandIcon isActive={isActive!}/>}
        expandIconPosition="end"
    >
        {items.map((item, index) => 
        <Panel header={CollapsibleHeader({
            category: item.category,
            title: item.title,
        })} key={index}>
            <p className="text-graytext text-base">{item.answer}</p>
        </Panel>
        )}
    </Collapse>
}

function getIcon(category: string) {
    switch( category ) {
        case 'Seafarer': {
            return <Image className="w-full h-full" alt="Seafarer" src={user} />
        }
        case 'Company': {
           return <Image className="w-full h-full" alt="Company" src={building} />
        }
        case 'Cadet': {
            return <Image className="w-full h-full" alt="Cadet" src={teacher} />
        }
    }
}

function CollapsibleHeader({category, title}: { category: string, title: string }) {
    return <div className="flex gap-4">
        <div
            className="w-12 h-12 min-w-12 min-h-12 bg-primary rounded-lg p-3">
            {getIcon(category)}
        </div>
        <div className="flex flex-col justify-center">
            <h3 className="text-xs text-graytext">{category}</h3>
            <p className="text-base text-black">{title}</p>
        </div>
    </div>
}

function ExpandIcon({isActive}: { isActive: boolean }) {
    return <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-button-border">
        <Image alt="Down icon" src={down} className={"transition-all duration-300 text-primary " + (isActive ? '-rotate-180' : 'rotate-0')}/>
    </button>
}