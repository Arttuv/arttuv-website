import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://arttuv.com',
    redirects: {

        // For some reason google search console was showing 404s for these - I don't remember when this folder structure was used
        '/dsa/distributed-situation-awareness.md': '/writings/distributed-situation-awareness-dsa/',
        '/rss-and-the-future-or-past-of-web.md': '/writings/rss-and-the-future-or-past-of-web/',
        '/writings/feedly-vs-inoreader-and-the-ultimate-feed-aggregator/rss-and-the-future-or-past-of-web.md': '/writings/rss-and-the-future-or-past-of-web/',
        '/author/author/': '/author/',
        '/automation-and-end-users/augment-complement-and-empower/': '/writings/augment-complement-and-empower/',
        '/coaching/asynchronous-work/': '/writings/asynchronous-work/',
        '/coaching/commitment-vs-forecast/': '/writings/commitment-vs-forecast/',
        '/dev/fear/': '/writings/fear/',
        '/hello-world-open-2012/hello-world-open-2012/': '/writings/26th-in-hello-world-open-2012/',
        '/information-overload/feedly-vs-inoreader-and-the-ultimate-feed-reader/': '/writings/feedly-vs-inoreader-and-the-ultimate-feed-aggregator/',
        '/hello-world-open-2012/hello-world-open-2012/': '/writings/26th-in-hello-world-open-2012/',
        
        '/information-overload/pdf-as-a-read-it-later-service/': '/writings/pdf-as-a-read-it-later-service/',
        '/java/reference-types/reference-types-in-java/': '/writings/reference-types-in-java/',
        '/research/dsa-design/designing-for-dsa/': '/writings/designing-to-support-dsa/',
        '/research/dsa/distributed-situation-awareness/': '/writings/distributed-situation-awareness-dsa/',
        '/research/sa/situation-awareness/': '/writings/situation-awareness/',
        '/ux/designing-for-usability-1985/designing-for-usability-1985/': '/writings/designing-for-usability-1985/',
        '/ux/how-do-people-act/how-do-people-act/': '/writings/how-do-people-act/',
        '/ux/iso-9241-210/iso-9241-210/': '/writings/iso-9241-210/',
        '/ux/platformer-ux/ux-of-a-platform-game/': '/writings/ux-of-a-platform-game/',
        '/ux/whos-fault-is-it-anyway/whos-fault-is-it-anyway/': '/writings/whos-fault-is-it-anyway/',
        '/ux/usability-of-patient-record-systems/usability-of-patient-record-systems/': '/writings/usability-of-patient-record-systems/',
        '/information-overload/rss-and-the-future-or-past-of-web/': '/writings/rss-and-the-future-or-past-of-web/',

        '/ux/web-ux-2004-vs-2016/web-ux-2016-vs-2004/': '/writings/nielsen-wb-ux-2016-vs-2004/',
        '/automation-and-end-users/automation-and-the-role-of-users/': '/writings/automation-and-the-role-of-human-operators/'
      }
});
