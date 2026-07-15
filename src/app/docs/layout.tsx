import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { getMainSiteUrl } from '@/lib/main-site-url';
import { headers } from 'next/headers';

export default async function Layout({ children }: LayoutProps<'/docs'>) {
  const hostname = (await headers()).get('host');

  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions({
        showMainNav: false,
        mainSiteUrl: getMainSiteUrl(hostname),
      })}
    >
      {children}
    </DocsLayout>
  );
}
