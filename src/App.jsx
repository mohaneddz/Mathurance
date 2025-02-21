import { useState, useRef } from 'react'
import { SidebarFinal } from '@/components/Dashboard'
import Visualization from '@/components/Visualization'
import LiquidityMatrix from '@/components/Matrix'
import Results from '@/components/Results'
import Final from '@/components/Final'
import Modal from '@/components/Modal';
import DropfileSection from '@/components/Dropfile'

import './App.css'
import { motion, useInView } from 'framer-motion';

const img1 = 'https://placehold.co/600x400'
const img2 = 'https://placehold.co/600x400'
const img3 = 'https://placehold.co/600x400'
const img4 = 'https://placehold.co/600x400'

function App() {
  const [image, setImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [insertedData, setInsertedData] = useState(true);

  const showModalFunction = (img) => {
    setImage(img);
    setShowModal(true);
    console.log(img, showModal);
  };

  // Refs for inView detection
  const visualRepRef = useRef(null);
  const liquidityMatrixRef = useRef(null);
  const resultsSectionRef = useRef(null);
  const dropfileSectionRef = useRef(null);

  // useInView hooks
  const visualRepInView = useInView(visualRepRef, { once: true });
  const liquidityMatrixInView = useInView(liquidityMatrixRef, { once: true });
  const resultsSectionInView = useInView(resultsSectionRef, { once: true });
  const dropfileSectionInView = useInView(dropfileSectionRef, { once: true });


  return (
    <>
      <Modal isVisible={showModal} close={() => setShowModal(false)}>
        <div className="flex flex-col items-center space-y-6">
          <img
            src={image}
            alt="Visualization"
            className="h-full w-[80vw] sm:h-full sm:w-[70vw] md:h-full md:w-[60vw] rounded-lg overflow-hidden border-2"
          />
        </div>
      </Modal>

      <SidebarFinal content={
        <>
          {insertedData && (
            <div className='w-full h-full flex flex-col items-center justify-center m-8'>

              <motion.h1
                ref={visualRepRef}
                initial={{ opacity: 0, y: 20 }}
                animate={visualRepInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className='text-5xl font-black mb-8 bg-gradient-to-b  from-primary to-secondary bg-clip-text text-transparent'
              >
                Visual Representations :
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={visualRepInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.2, staggerChildren: 0.1 }}
                className='w-full h-min grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'
              >
                <Visualization title="Natural Disasters" onClick={() => showModalFunction(img1)} img={img1} />
                <Visualization title="Fire Incidents" onClick={() => showModalFunction(img2)} img={img2} />
                <Visualization title="Civil Responsibility" onClick={() => showModalFunction(img3)} img={img3} />
                <Visualization title="Simple Risks" onClick={() => showModalFunction(img4)} img={img4} />
              </motion.div>

              <br className='my-8' />
              <motion.h1
                ref={liquidityMatrixRef}
                initial={{ opacity: 0, y: 20 }}
                animate={liquidityMatrixInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className='text-5xl font-black underline h-[4rem] mb-8 bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent'
              >
                Liquidity Matrices :
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={liquidityMatrixInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.2, staggerChildren: 0.1 }}
                className='w-full flex flex-col gap-4 sm:grid-cols-2 md:grid-cols-4'
              >
                <LiquidityMatrix title="NAT-CAT" data={""} />
                <LiquidityMatrix title="Incendie" data={""} />
                <LiquidityMatrix title="Responsabilité Civile" data={""} />
                <LiquidityMatrix title="Risque simple" data={""} />
              </motion.div>
              <br className='my-8' />
              <motion.div
                ref={resultsSectionRef}
                initial={{ opacity: 0, y: 20 }}
                animate={resultsSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl p-8 flex flex-col gap-8 justify-center items-center"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={resultsSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8 }}
                  className='text-5xl font-bold mb-2 bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent'
                >
                  Results
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={resultsSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 1, delay: 0.4, staggerChildren: 0.1 }}
                  className="grid grid-cols-2 grid-rows-2 gap-8 mb-8"
                >
                  <Results title="NAT-CAT" />
                  <Results title="Incendie" />
                  <Results title="Responsabilité Civile" />
                  <Results title="Risque simple" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={resultsSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8 }}
                  className='text-5xl font-bold mb-2 bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent'
                >
                  Total Provision
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={resultsSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className='w-[70vw]'
                >
                  <Final />
                </motion.div>
              </motion.div>
              <br className='my-8' />
            </div>
          )}
          {!insertedData && (
            <motion.div
              ref={dropfileSectionRef}
              initial={{ opacity: 0, y: 20 }}
              animate={dropfileSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1 }}
              className="h-full w-full flex flex-col items-center justify-center"
            >
              <DropfileSection setInsertedData={setInsertedData} />
            </motion.div>
          )
          }
        </>
      } />
    </>
  )
}

export default App;