import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { getMainSiteUrl } from '@/lib/main-site-url';
import { headers } from 'next/headers';

export default async function Layout({ children }: LayoutProps<'/'>) {
  const hostname = (await headers()).get('host');

  return (
    <HomeLayout
      {...baseOptions({
        showMainNav: true,
        mainSiteUrl: getMainSiteUrl(hostname),
      })}
    >
      {children}
    </HomeLayout>
  );
}
