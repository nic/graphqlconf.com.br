import React from 'react'
import IconA from './LinkIcon'
import Facebook from '../../assets/imgs/facebook.svg'
import Twitter from '../../assets/imgs/twitter.svg'
import Slack from '../../assets/imgs/slack.svg'
// import Github from '../../assets/imgs/github.svg'
import Email from '../../assets/imgs/email.svg'
import Graphql from '../../assets/imgs/GraphQL.svg'

export default props =>
    <div>
        <h1 className="text-center">
            Contato
    </h1>
        <p className="mt-5 mb-5">
            <IconA link="https://graphql-slack.now.sh" src={Slack} title="Slack" />
            <IconA link="https://fb.com/graphqlconf" src={Facebook} title="Facebook" />
            <IconA link="https://twitter.com/graphqlconfbr" src={Twitter} title="Twitter" />
            {/*<IconA link="#" src={Github} title="Github" />*/}
        </p>

        <p>
            <IconA link="https://graphql.org/community/upcoming-events/" src={Graphql} title="Conference" placeholder="GraphQl Conferences" />
        </p>
        <p>
            <IconA link="mailto:graphqlconfbr@gmail.com" src={Email} title="Email" small="true" placeholder="graphqlconfbr@gmail.com" />
        </p>
    </div>
