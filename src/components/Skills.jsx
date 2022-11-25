import React from 'react'
import {DiRor, DiJsBadge, DiHtml5, DiCss3, DiPostgresql, DiGithubBadge, DiHeroku, DiReact} from 'react-icons/di';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#011933] text-[#f7f3ea]'>
      <div className='max-w-[1000px] w-full h-full mx-auto p-4 flex flex-col justify-center'>
        <div>
          <p className='text-4xl mx-16 font-bold inline border-b-4 border-[#f7f3ea]'>
            Skills
          </p>
        </div>
        <div className='w-full grid grid-cols-2 text-center py-8 sm:grid-cols-4 gap-4'>
          <div>
            <p className='text-8xl'>
              <DiRor />
            </p>
            <p>
              Ruby-on-Rails
            </p>
          </div>
          <div>
            <p className='text-8xl'>
              <DiJsBadge />
            </p>
            <p>
              JavaScript
            </p>
          </div>
          <div>
            <p className='text-8xl'>
              <DiHtml5 />
            </p>
            <p>
              HTML
            </p>
          </div>
          <div>
            <p className='text-8xl'>
              <DiCss3 />
            </p>
            <p>
              CSS
            </p>
          </div>
          <div>
            <p className='text-8xl'>
              <DiPostgresql />
            </p>
            <p>
              PostgreSQL
            </p>
          </div>
          <div>
            <p className='text-8xl'>
              <DiGithubBadge />
            </p>
            <p>
              GitHub
            </p>
          </div>
          <div>
            <p className='text-8xl'>
              <DiHeroku />
            </p>
            <p>
              Heroku
            </p>
          </div>
          <div>
            <p className='text-8xl'>
              <DiReact />
            </p>
            <p>
              React
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills
