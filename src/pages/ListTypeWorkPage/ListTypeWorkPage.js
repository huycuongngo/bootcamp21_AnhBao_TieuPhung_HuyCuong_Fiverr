import { Card } from 'antd';
import { SiBuddy } from 'react-icons/si';

import 'antd/dist/antd.min.css';
import './ListTypeWorkPage.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { BaseService } from '../../services/baseService';
import { useEffect, useState } from 'react';
import TabSubTypeWork from './TabSubTypeWork/TabSubTypeWork';

const { Meta } = Card;

var imageAddress =
  'https://mona.software/wp-content/uploads/2021/07/tam-quan-trong-cua-data-analyst-la-gi.jpg';

let typeWorkService = new BaseService();

export const ListTypeWorkPage = () => {
  const navigate = useNavigate();
  const [typeJob, setTypeJob] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    typeWorkService
      .get('api/type-jobs')
      .then((res) => {
        // console.log(res.data);
        let typeJobs = res.data.map((item) => ({
          subTypeJob: item.subTypeJobs,
          name: item.name,
          id: item._id,
        }));

        const checkIndex = (typeJob) => {
          return typeJob.id === id;
        };
        const indexChecked = typeJobs.findIndex(checkIndex);

        let typeJob = typeJobs[indexChecked];

        setTypeJob(typeJob);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  let subTypeJob = typeJob.subTypeJob || [];

  const handleClickSubTypeJob = (idTypeJob, idSubTypeJob) => {
    console.log('click subtypejob ne');
    navigate(`/list_type/${idTypeJob}/${idSubTypeJob}`);
  };

  return (
    <div className='list-type-work-page  my-10'>
      <div className='list-type-work-page-header container mx-auto'>
        <h1 className='font-bold text-4xl mb-3'>{typeJob.name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Quas, nulla eum. Itaque et vel sequi.
        </p>
        <div className='text-blue-400 m-5'>
          <SiBuddy />
          <span>How Feverr Wokrs</span>
        </div>
      </div>
      <div className='list-type-work-page-body grid grid-cols-4 gap-4 m-10 container mx-auto'>
        <div className=''>
          <TabSubTypeWork subTypeJob={subTypeJob} typeJob={typeJob} />
        </div>
        <div className='col-start-2 col-end-5 grid grid-cols-3 gap-4'>
          {subTypeJob.map((item) => {
            return (
              <Card
                key={item._id}
                className='w-full h-full'
                hoverable
                onClick={() => {
                  handleClickSubTypeJob(typeJob.id, item._id);
                }}
                cover={
                  <img
                    className='w-full h-full object-cover'
                    alt='example'
                    src={item.image || imageAddress}
                  />
                }
              >
                <Meta title={item.name} />
              </Card>
            );
          })}
        </div>
      </div>
      <div className='list-type-work-page-footer flex space-x-20 bg-gray-100 p-10'>
        <div className='list-type-work-page-footer-item'>
          <h1 className='text-xl'>
            Your <span className=' font-bold'>Terms</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis, incidunt.
          </p>
        </div>
        <div className='list-type-work-page-footer-item'>
          <h1 className='text-xl'>
            Your <span className=' font-bold'>Timeline</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis, incidunt.
          </p>
        </div>
        <div className='list-type-work-page-footer-item'>
          <h1 className='text-xl'>
            Your <span className='font-bold'>Safety</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis, incidunt.
          </p>
        </div>
      </div>
    </div>
  );
};
