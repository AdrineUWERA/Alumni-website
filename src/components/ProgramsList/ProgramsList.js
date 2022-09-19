import programs_style from './ProgramsList.scss';
import program1 from '../../asstes/program1.png';
import program2 from '../../asstes/program2.png';

const ProgramsList = () => {
    return ( 
        <section className="programs"> 
            <div className="program">
                <div className="odd-program">
                    <h2>ALU Connect</h2>
                    <div className='program-image'>
                        <img src={program1} alt="program photo" height={600} width={500}/>
                    </div>
                    <p>Find connections through ALU Connect's global community, and advance your career with professional networking</p>
                    <button>Learn more</button>
                </div>
                <div className="even-program">
                    <div className='program-image'>
                        <img src={program2} alt="program photo" height={600} width={500}/>
                    </div>
                    <div className="program-description">
                        <div className="program-text">
                            <h2>ALU Community Drive</h2>
                            <p>Take a look at the several communal initiatives taken by ALU’s gifted alumni and tag along and join them too!</p>
                        </div>
                        <button>Learn more</button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default ProgramsList;