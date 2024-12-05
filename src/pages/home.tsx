import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { OverviewAnalyticsView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Dashboard - ${CONFIG.appName}`}</title>
        <meta
          name="description"
          content="Time Controller"
        />
        <meta name="keywords" content="RH,time,controller,employees" />
      </Helmet>

      <OverviewAnalyticsView />
    </>
  );
}
