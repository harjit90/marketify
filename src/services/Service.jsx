import Card from './Card';
import Sdata from "../Sdata"

const Service = () => {
    return (
        <>
            <div className='service pb-5'>
                <div className="py-5">
                    <h2 className="text-center">Our Services</h2>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                {
                                    Sdata.map((val, index) => {
                                        return <Card
                                            imgsrc={val.imgsrc}
                                            title={val.title}
                                        />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;