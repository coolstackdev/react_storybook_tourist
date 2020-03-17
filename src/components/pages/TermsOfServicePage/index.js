import React from 'react'
import { useScrollPosition }from 'hooks'
import {
  PageTemplate,
  Header,
  Footer,
  Heading,
  Link,
  Paragraph,
  List
} from 'components'

const TermsOfServicePage = () => {
  const pagePosition = useScrollPosition()

  return (
    <PageTemplate
      header={<Header topPage={pagePosition === 0 && true} />}
      footer={<Footer />}
    >
      <Heading level={1}>Hopohop Inc. Terms of Service</Heading>
      <Heading level={2}>1. Terms</Heading>
      <Paragraph>By accessing the website at <Link href="http://hopohop.com">https://hopohop.com</Link>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</Paragraph>
      <Heading level={2}>2. Use License</Heading>
      <List ordered type="a">
        <li>Permission is granted to temporarily download one copy of the materials (information or software) on Hopohop Inc.'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        <List ordered type="i">
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>attempt to decompile or reverse engineer any software contained on Hopohop Inc.'s website;</li>
          <li>remove any copyright or other proprietary notations from the materials; or</li>
          <li>transfer the materials to another person or ""mirror"" the materials on any other server.</li>
        </List>
        </li>
        <li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Hopohop Inc. at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li>
      </List>
      <Heading level={2}>3. Disclaimer</Heading>
      <List ordered type="a">
        <li>The materials on Hopohop Inc.'s website are provided on an 'as is' basis. Hopohop Inc. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>
        <li>Further, Hopohop Inc. does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</li>
      </List>
      <Heading level={2}>4. Limitations</Heading>
      <Paragraph>In no event shall Hopohop Inc. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Hopohop Inc.'s website, even if Hopohop Inc. or a Hopohop Inc. authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</Paragraph>
      <Heading level={2}>5. Accuracy of materials</Heading>
      <Paragraph>The materials appearing on Hopohop Inc.'s website could include technical, typographical, or photographic errors. Hopohop Inc. does not warrant that any of the materials on its website are accurate, complete or current. Hopohop Inc. may make changes to the materials contained on its website at any time without notice. However Hopohop Inc. does not make any commitment to update the materials.</Paragraph>
      <Heading level={2}>6. Links</Heading>
      <Paragraph>Hopohop Inc. has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Hopohop Inc. of the site. Use of any such linked website is at the user's own risk.</Paragraph>
      <Heading level={2}>7. Modifications</Heading>
      <Paragraph>Hopohop Inc. may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</Paragraph>
      <Heading level={2}>8. Governing Law</Heading>
      <Paragraph>These terms and conditions are governed by and construed in accordance with the laws of British Colombia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</Paragraph>
      <Paragraph>Generated by <Link title="Terms of Service Template Generator" href="https://getterms.io/">GetTerms.io</Link></Paragraph>
    </PageTemplate>
    )
  }

  export default TermsOfServicePage
