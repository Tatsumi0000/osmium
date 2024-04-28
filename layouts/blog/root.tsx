import type { ReactNode } from 'react'
import cn from 'classnames'

import { useData } from '@/contexts/data'
import LayoutHead from './head'
import Header from './header'
import Footer from './footer'
import { exclude } from './../../next-sitemap.config.js'
import { useRouter } from "next/router";

export default function BlogLayout ({ children }: { children: ReactNode }) {
  const { current: post } = useData()
  const router = useRouter()
  const isNoIndex = exclude.includes(router.asPath)

  return <>
    <LayoutHead post={post} noIndex={isNoIndex}/>
    <div className="wrapper">
      <Header title={post?.title} fullWidth={post?.fullWidth}/>
      <main className={cn(
        'flex-1 transition-all',
        { 'self-center px-4 w-full max-w-2xl': !post },
      )}>
        {children}
      </main>
      <Footer fullWidth={post?.fullWidth}/>
    </div>
  </>
}
