import Carousel from 'react-bootstrap/Carousel';

import '../index.css';

export const CarouselSlider = () => {
  return (
    <Carousel interval={null} touch={true}>
      <Carousel.Item style={{height:"100%"}}>
        <h3>Type: Long-Term Residential (Inpatient) Treatment</h3>
        <h3>Setting: Treatment Center</h3>
        <h3>Time Frame: 6 - 12 months, 24 hours per day</h3>
        <h3>Price: &#x24;&#x24;&#x24;</h3>
        <p>Long-term residential treatment typically involves several days of closely monitored detox, followed by intensive substance abuse therapy and aftercare planning. This type of treatment works well for individuals with long-standing or severe addictions, as well as dually diagnosed patients. Residential treatment centers can also provide assistance for adolescents addicted to drugs or alcohol. Treatment is highly structured and can be confrontational at times, with activities designed to help residents examine damaging beliefs, self-concepts, and destructive patterns of behavior and adopt new, more harmonious and constructive ways to interact with others.</p>
      </Carousel.Item>
      <Carousel.Item style={{height:"100%"}}>
        <h3>Type: Short-Term Residential (Inpatient) Treatment</h3>
        <h3>Setting: Treatment Center</h3>
        <h3>Time Frame: 3 - 6 weeks, 24 hours per day</h3>
        <h3>Price: &#x24;&#x24;</h3>
        <p>Short-term residential programs provide intensive but relatively brief treatment based on a modified 12-step approach. Patients in these programs will undergo medical detoxification under the close supervision of experienced detox staff and will also take part in individual and group therapy sessions in which staff therapists utilize a wide range of therapeutic techniques to create an individualized treatment plan for your own unique needs. Additionally, they will also take part in life and coping skills training, family therapy, holistic and alternative therapies.</p>
      </Carousel.Item>
      <Carousel.Item style={{height:"100%"}}>
        <h3>Type: Outpatient Treatment</h3>
        <h3>Setting: Non-hospital</h3>
        <h3>Time Frame: N/A (Based on Residential Treatment Stay)</h3>
        <h3>Price: &#x24;&#x24;</h3>
        <p>Outpatient treatment varies in the types and intensity of services offered. Such treatment costs less than residential or inpatient treatment and often is more suitable for people with jobs or extensive social support. In many outpatient programs, group counseling can be a major component. Some outpatient programs are also designed to treat patients with medical or other mental health problems in addition to their drug disorders.</p>
      </Carousel.Item>
      <Carousel.Item style={{height:"100%"}}>
        <h3>Type: Individualized Drug Counseling</h3>
        <h3>Setting: Non-hospital</h3>
        <h3>Time Frame: As Needed, 1 - 2 times per week</h3>
        <h3>Price: &#x24;&#x24;</h3>
        <p>Individualized drug counseling not only focuses on reducing or stopping illicit drug or alcohol use; it also addresses related areas of impaired functioning—such as employment status, illegal activity, and family/social relations—as well as the content and structure of the patient’s recovery program. Through its emphasis on short-term behavioral goals, individualized counseling helps the patient develop coping strategies and tools to abstain from drug use and maintain abstinence. The addiction counselor encourages 12-step participation and makes referrals for needed supplemental medical, psychiatric, employment, and other services.</p>
      </Carousel.Item>
      <Carousel.Item style={{height:"100%"}}>
        <h3>Type: Group Counseling</h3>
        <h3>Setting: Non-hospital</h3>
        <h3>Time Frame: As needed, 1 - 2 hours per week</h3>
        <h3>Price: &#x24;</h3>
        <p>Group therapy allows patients to capitalize on the social reinforcement offered by peer discussion and to help promote drug-free lifestyles. Research has shown that when group therapy either is offered in conjunction with individualized drug counseling or is formatted to reflect the principles of cognitive-behavioral therapy or contingency management, positive outcomes are achieved.These groups including Narcotics Anonymous and Alcoholics Anonymous.</p>
      </Carousel.Item>
    </Carousel>
  )
}
