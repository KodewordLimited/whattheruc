import Calculator from "./Calculator";

export default function Home() {
  return (
    <>
      {/* Hero / Calculator Section */}
      <section className="section light-blue">
        <div className="custom-container">
          <div className="vstack">
            <h1 className="h1-calc">What the RUC?</h1>
            <div className="text-large">
              The New Zealand Government recently announced they&apos;d start
              charging EVs and Plug-in-Hybrids (PHEVs) Road User Charges.
              <br />
              <br />
              Many people who drive EVs have never paid this tax before, so we
              wanted to help!
              <br />
              <br />
              Enter your car licence plate to see how much you&apos;ll pay in
              RUCs per year.
            </div>
            <div className="spacer-8" />
            <div className="spacer-8" />
            <div className="spacer-32" />
          </div>
          <Calculator />
        </div>
      </section>

      <div className="spacer-64" />

      {/* Content Section */}
      <div className="content-container">
        <div className="update-block">
          <div>Update: 24th of March 2024</div>
          <h3 className="h3">
            The government announced that rates for Plug-in Hybrid Electric
            Vehicles (PHEVs) would be reduced from $53 to $38 per 1000km
          </h3>
          <div>
            We&apos;ve now updated What the RUC to take this into account. You
            can read more about the{" "}
            <a
              href="https://www.rnz.co.nz/news/political/512095/government-agrees-to-slash-road-user-charges-for-plug-in-hybrids"
              target="_blank"
              rel="noopener noreferrer"
            >
              announcement here.
            </a>
          </div>
        </div>

        <div className="rich-text">
          <p>
            From April 1, 2024, owners of light electric vehicles (EVs) and
            plug-in hybrid vehicles (PHEVs) in New Zealand will begin paying
            road user charges (RUC). This marks a significant shift from the
            previous exemption that EV owners enjoyed since 2009. The exemption
            was initially in place to encourage the uptake of EVs until they
            reached approximately 2 percent of the country&apos;s light vehicle
            fleet. As of 2024, this milestone has been achieved with around
            100,000 light EVs on New Zealand roads, prompting the government to
            end the exemption.
          </p>

          <h2>
            <strong>RUC Rates and Details</strong>
          </h2>
          <ul role="list" className="list">
            <li>
              <strong>Rates</strong>: The RUC rate for light EVs is set at $76
              per 1000km, while for PHEVs, it&apos;s $38 per 1000km. The lower
              rate for PHEVs takes into account that their owners also pay some
              fuel excise duty when buying petrol.
            </li>
            <li>
              <strong>Purchase and Display</strong>: Owners of these vehicles
              will need to buy a RUC license and display it on their windscreen.
              Licenses can be purchased online through the NZTA website or in
              person at an NZTA agent from April 1.
            </li>
            <li>
              <strong>Grace Period</strong>: Although the RUC licenses can&apos;t
              be bought before April 1, EV owners will have until May 31 to
              purchase their license without facing penalties.
            </li>
            <li>
              <strong>Contribution to Transport System</strong>: The revenue from
              these charges contributes to the National Land Transport Fund,
              which is used for maintaining and improving New Zealand&apos;s road
              network.
            </li>
          </ul>

          <h2>
            <strong>The Challenge: Confusion and Uncertainty</strong>
          </h2>
          <p>
            One thing became abundantly clear: many EV and PHEV owners were
            stepping into unfamiliar territory. Road User Charges were a new
            concept for many who had embraced electric vehicles not just for
            their environmental benefits but also for their cost-effectiveness.
            The introduction of RUC meant recalculating the economics of owning
            an EV or PHEV, a task that proved to be daunting for many.
          </p>

          <h2>
            <strong>Our Response: Creating WhatTheRUC.com</strong>
          </h2>
          <p>
            This is where the idea for WhatTheRUC.com was born. As creators of
            the{" "}
            <a href="https://getroadtrip.app/" target="_blank" rel="noopener noreferrer">
              Roadtrip app
            </a>
            , (which has also now been updated to reflect the new RUC prices for
            EV owners) we&apos;ve always been passionate about making vehicle
            ownership as straightforward and transparent as possible.
            WhatTheRUC.com was conceived as a bridge over the murky waters of
            RUC calculations for EVs and PHEVs.
          </p>
          <p>
            The site is simple: enter your car&apos;s details and your average
            annual driving distance, and it calculates your yearly RUC. We made
            sure that the process respects user privacy – a core value in all our
            projects. There&apos;s no storage of personal information, just a
            straightforward calculation to help you understand what this policy
            change means for your wallet.
          </p>

          <h3>
            <strong>Why We Built WhatTheRUC.com</strong>
          </h3>
          <p>
            Our motivation was two-fold. Firstly, we wanted to provide clarity
            and ease the uncertainty surrounding the new RUC charges. We knew the
            tech we built for Roadtrip was applicable here and could make a
            difference in easing some confusion – and we shamelessly figured, if
            you like this, you might love our app{" "}
            <a href="https://getroadtrip.app/" target="_blank" rel="noopener noreferrer">
              Roadtrip
            </a>
            !
          </p>

          <h2>Frequently asked questions</h2>
          <p>
            Since launching the site we&apos;d had a lot of questions from EV
            owners who aren&apos;t sure how Road User Charges work:
          </p>

          <p>
            <strong>How much are road user charges per km?</strong>
          </p>
          <p>
            For Diesel or Electric vehicles in New Zealand, the road user charge
            is $76 per 1000km. For plug-in hybrid electric vehicles (PHEVs),
            it&apos;s $38 per 1000km, starting April 1, 2024. If you drive a
            regular hybrid, you won&apos;t pay any RUCs.
          </p>

          <p>
            <strong>How do I check my RUC?</strong>
          </p>
          <p>
            You can check your RUC in New Zealand online through the NZTA website
            or in person at an NZTA agent. Additionally, websites like
            whattheruc.com allow you to estimate RUC costs based on your vehicle
            type.
          </p>

          <p>
            <strong>Can I prepay my RUC?</strong>
          </p>
          <p>
            Yes, RUC can be prepaid in New Zealand, allowing vehicle owners to
            purchase RUC licenses for future use.
          </p>

          <p>
            <strong>Are there any exemptions or discounts for RUC?</strong>
          </p>
          <p>
            Exemptions or discounts may apply under specific conditions, but
            generally, all eligible vehicles must pay RUC.
          </p>

          <p>
            <strong>
              How is the RUC rate for electric vehicles calculated?
            </strong>
          </p>
          <p>
            The RUC rate for EVs considers factors like vehicle type and
            environmental impact, set by the NZ government.
          </p>

          <p>
            <strong>What is the process for purchasing a RUC license?</strong>
          </p>
          <p>
            A RUC license can be purchased online through the NZTA website or at
            an NZTA agent.
          </p>

          <p>
            <strong>How does RUC contribute to road maintenance?</strong>
          </p>
          <p>
            RUC funds contribute to the National Land Transport Fund, which
            finances road maintenance and improvements.
          </p>

          <p>
            <strong>
              What are the penalties for inaccurate odometer readings?
            </strong>
          </p>
          <p>
            Providing false odometer readings can lead to additional charges and
            legal consequences.
          </p>

          <p>
            <strong>What happens if I don&apos;t pay road user charges?</strong>
          </p>
          <p>
            Not paying road user charges in New Zealand can result in penalties,
            including fines. It&apos;s mandatory to have a current RUC license
            displayed on your vehicle&apos;s windscreen.
          </p>

          <p>
            <strong>
              Can I get a refund on my RUC if I sell my vehicle?
            </strong>
          </p>
          <p>
            RUC refunds are possible in certain circumstances, such as selling
            the vehicle before the RUC license expires.
          </p>

          <p>
            <strong>How often do I need to renew my RUC license?</strong>
          </p>
          <p>
            RUC licenses are renewed based on distance traveled, typically every
            1000km or as needed.
          </p>

          <p>
            <strong>Does RUC apply to rental or leased vehicles?</strong>
          </p>
          <p>
            Yes, RUC applies to all eligible vehicles, including rental and
            leased ones.
          </p>

          <p>
            <strong>
              Are there any changes planned for RUC rates or policies?
            </strong>
          </p>
          <p>
            Any changes to RUC rates or policies are announced by the NZ
            government or NZTA.
          </p>
        </div>
      </div>

      <div className="spacer-64" />
    </>
  );
}
