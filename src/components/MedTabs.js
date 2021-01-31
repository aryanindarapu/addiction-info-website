import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { GiChestnutLeaf, GiPowder, GiCigarette } from 'react-icons/gi'; 
import { FaWineBottle, FaPrescriptionBottle } from 'react-icons/fa';

import '../index.css';

export const MedTabs = () => {
  return (
    <Tabs defaultActiveKey="alcohol" transition={false} className="med-tabs">
      <Tab eventKey="alcohol" title={<h4><FaWineBottle /> Alcohol</h4>}>
        <h2 style={{color: 'black', textDecoration: 'underline'}}>Possible Medications</h2>
        <h3 style={{color: 'black'}}>Disulfram (Antabuse)</h3>
        <p style={{color: 'black'}}>Disulfiram, better known by its brand name Antabuse, causes unpleasant side effects (nausea, vomiting, sweating, and headaches) when drinking alcohol and acting as a drinking deterrent. It works by preventing acetaldehyde, a toxin from alcohol, from breaking down and in turn causing mildly annoying side-effects.</p>
        <h3 style={{color: 'black'}}>Naltrexone (ReVia/Vivitrol)</h3>
        <p style={{color: 'black'}}>Naltrexone is sold under the brand names of ReVia and Vivitrol. It is an extended-release, monthly oral or injectable medication that blocks the euphoric and sedative effects that people experience when they drink alcohol. It binds to the pleasure receptors, reducing and suppressing alcohol cravings.</p>
        <h3 style={{color: 'black'}}>Acamprosate (Campral)</h3>
        <p style={{color: 'black'}}>Acamprosate (Campral) works by reducing the physical distress and emotional discomfort people usually experience when they quit drinking. It has been shown to work well ONLY if the patient stops drinking and is taken orally in a tablet form.</p>
      </Tab>
      <Tab eventKey="opioids" title={<h4><FaPrescriptionBottle /> Opioids</h4>}>
        <h2 style={{color: 'black', textDecoration: 'underline'}}>Possible Medications</h2>
        <h3 style={{color: 'black'}}>Buprenorphine (Buprenex, Suboxone, Subutex)</h3>
        <p style={{color: 'black'}}>Buprenorphine (Buprenex, Suboxone, Subutex) produces effects such as euphoria or respiratory depression at low to moderate doses. However, with buprenorphine, these effects are weaker than full opioid agonists such as methadone and heroin. It can diminish the effects of physical dependence to opioids, such as withdrawal symptoms and cravings.</p>
        <h3 style={{color: 'black'}}>Naltrexone (ReVia/Vivitrol)</h3>
        <p style={{color: 'black'}}>Naltrexone is sold under the brand names of ReVia and Vivitrol. It is an extended-release, monthly oral or injectable medication that blocks the euphoric and sedative effects that people experience when they take opioids. It binds to the pleasure receptors, reducing and suppressing opioid cravings.</p>
        <h3 style={{color: 'black'}}>Methadone (Methadose)</h3>
        <p style={{color: 'black'}}>Methadone (Methadose) is a long-acting opioid agonist, reducing opioid craving and withdrawal symptoms while blocking the effects of opioids. It is taken daily and is available in liquid, powder and diskettes forms.</p>
      </Tab>
      <Tab eventKey="cocaine" title={<h4><GiPowder /> Cocaine</h4>}>
        <h2 style={{color: 'black', textDecoration: 'underline'}}>Possible Medications</h2>
        <h3 style={{color: 'black'}}>NOTE: There are currently no FDA approved medications for cocaine use, but there are some potential medications.</h3>
        <h3 style={{color: 'black'}}>Modafinil (Provigil)</h3>
        <p style={{color: 'black'}}>Modafinil, brand name Provigil, can prevent the fatigue and drowsiness associated with cocaine withdrawal by promoting healthy nighttime sleep and encouraging dopamine production. It is not known how Modafinil works.</p>
        <h3 style={{color: 'black'}}>Disulfram (Antabuse)</h3>
        <p style={{color: 'black'}}>Disulfiram, better known by its brand name Antabuse, causes unpleasant side effects (nausea, vomiting, sweating, and headaches) when drinking alcohol and acting as a drinking deterrent. It works by preventing acetaldehyde, a toxin from alcohol, from breaking down and in turn causing mildly annoying side-effects.</p>
        <h3 style={{color: 'black'}}>Buprenorphine (Buprenex, Suboxone, Subutex)</h3>
        <p style={{color: 'black'}}>Buprenorphine (Buprenex, Suboxone, Subutex) produces effects such as euphoria or respiratory depression at low to moderate doses. However, with buprenorphine, these effects are weaker than full opioid agonists such as methadone and heroin. It can diminish the effects of physical dependence to opioids, such as withdrawal symptoms and cravings.</p>
      </Tab>
      <Tab eventKey="marijuana" title={<h4><GiChestnutLeaf /> Marijuana</h4>}>
        <h2 style={{color: 'black', textDecoration: 'underline'}}>Possible Medications</h2>
        <h3 style={{color: 'black'}}>NOTE: There are currently no FDA approved medications for cocaine use, but there are some potential medications.</h3>
        {/* <h3 style={{color: 'black'}}></h3>
        <p style={{color: 'black'}}></p>
        <h3 style={{color: 'black'}}>Naltrexone (ReVia/Vivitrol)</h3>
        <p style={{color: 'black'}}></p>
        <h3 style={{color: 'black'}}></h3>
        <p style={{color: 'black'}}></p> */}
      </Tab>
      <Tab eventKey="cigarettes" title={<h4><GiCigarette /> Tobacco</h4>}>
       <h2 style={{color: 'black', textDecoration: 'underline'}}>Possible Medications</h2>
        <h3 style={{color: 'black'}}>Nicotine Replacement Therapy</h3>
        <p style={{color: 'black'}}>Nicotine Replacement Therapy (NRT) stimulates the brain receptors targeted by nicotine, helping relieve nicotine withdrawal symptoms and cravings that lead to relapse. Many people use NRT to help them get through the early stages of cessation, and those with more severe nicotine addiction can benefit from longer-term treatment. Use of NRT improves smoking cessation outcomes, and adding behavioral therapies further increases quit rates.</p>
        <h3 style={{color: 'black'}}>Bupropion (Wellbutrin)</h3>
        <p style={{color: 'black'}}>Bupropion, known as Wellbutrin, is an antidepressant medication. However, it also works by inhibiting the reuptake of the brain chemicals norepinephrine and dopamine as well as stimulating their release, preventing the need to continually use tobacco and nicotine. </p>
        <h3 style={{color: 'black'}}>Varenicline (Chantix)</h3>
        <p style={{color: 'black'}}>Varenicline helps reduce nicotine cravings by stimulating the nicotine receptor but to a lesser degree than nicotine. This medication has been proven to be very effective in recent studies.</p>
      </Tab>
    </Tabs>
  )
}