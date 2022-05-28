import { PAGE_CONFIG } from 'config';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { FC } from 'react';


export const CustomHead: FC<any> = () => {
    const router = useRouter();

    const getPageTitle = (): string => {
      const pathname = router?.pathname;
      return PAGE_CONFIG[pathname]?.title;
    };

    return (
        <Head>
            <title>{getPageTitle()}</title>
        </Head>
    )
}