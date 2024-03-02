import ProductFeatureImg from './productFeatureImg';
import ProductFeatureDetails from './productFeatureDetails';
import './productFeature.scss'

interface Props {
  title: string;
  images: ({
    src: string;
    alt: string;
  })[];
  full_description: string;
  featuresDetails: Map<string,string>;
}

export default function ProductOverview({
  title,
  images,
  full_description,
  featuresDetails,
}: Props) {

  return (
    <>
    <div className="card card-product card-plain">
      <div className="row">
        <div className="col-12 col-lg-7 mx-auto text-center">
          {(title.length != 0) && 
            <h2 className="mb-3">{title}</h2>
          }
          {(full_description.length != 0) && 
            <p className="mb-5">{full_description}</p>
          }
        </div>
      </div>
      <div className="container">
        <div className="row gx-2">
        <div className="col-lg-6 col-sm-4 my-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">FLOOR COATING APPLICATION</h5>
                <div className="scrollable">
                <img src={`${import.meta.env.BASE_URL}images/process1.jpg`} className="" alt="user image" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-4 my-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">STEP 1 – WE DIAMOND GRIND THE FLOOR SURFACE</h5>
                <div className="scrollable">
                  <p className="card-text">The preparation process is the most important step during any flooring project. The Epoxy Pros uses state-of-the-art diamond grinders and a self-contained vacuum system that creates an unbreakable mechanical bond to the substrate. Our crew will unload the equipment and then examine the concrete density to choose the most suitable diamond blades for grinding your floor.</p>
                  <p className="card-text">We will then grind the surface of the entire floor, which is an important step since it profiles the substrate and opens the concrete material. Our crew will then use a hand grinder to ground down the edges.</p>
                  <p className="card-text">It is very important that every inch of the floor is fully prepared for the coating. The Epoxy Pros uses an epoxy basecoat with a polyaspartic topcoat. We can apply the coating to vertical surfaces such as cinder blocks, wooden baseboards, wooden steps, and foundation walls.
  Included in this step, is the grinding process and the cleaning of all debris from the surface.</p>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-4 my-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">STEP 2 – WE REPAIR CRACKS AND CHIPS</h5>
                <div className="scrollable">
                <p className="card-text">It is common for concrete pads to have hairline cracks, and although it is a natural occurrence, they must be opened with a diamond cutting wheel in order to fill it with a polyurea filler or mortar. The application process is fast and the filler cures in approximately 1-4 hours.</p>
                <p className="card-text">The floor should be fully smooth, and all cracks must be completely invisible. It is common for floors to have salt pits or other signs of minor damage, but these spots must also be filled and ground down to achieve a flawless, smooth surface.</p>
                <p className="card-text">After we finish with the grinding process, we will vacuum the floor to make sure all dust and debris are fully removed.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-4 my-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">STEP 3 – WE APPLY A PIGMENTED ADHESIVE BASE COAT</h5>
                <div className="scrollable">
                <p className="card-text">The Epoxy Pros uses an epoxy basecoat with a polyaspartic top coating, which is available as a 1 or 2-day system. The system we choose will depend on the size of your floor.</p>
                <p className="card-text">With the 1-day system, you can return to regular foot traffic and regular usage the following day, with a limit of 250 pounds. With the 2-day system, you can return to regular foot traffic and usage on the second day following the application. With either system, the floor is fully cured 48 hours after completion.</p>
                <p className="card-text">We will mix the 2 components by adding pigment to the base coat chosen by our customer’s choice of pre-blended vinyl flakes. The first step is to roll the base coat onto all vertical surfaces and heavily apply the flakes for 100% coverage.</p>
                <p className="card-text">Before the base coat is applied our crew will vacuum the excess material from the floor. We will then apply the base coat to the entire floor surface.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-4 my-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">STEP 4 – APPLICATION OF DECORATIVE FLAKES</h5>
                <div className="scrollable">
                <p className="card-text">One person from our crew will roll the coating onto the floor and a second crew member will broadcast the vinyl flakes. To provide our crew with 100% coverage, three times the amount of material is broadcast during this process.</p>
                <p className="card-text">It takes 60 minutes for the floor to cure once the entire floor is fully coated.</p>
                <p className="card-text">We will remove all the excess flake material once the coating is fully cured.</p>
                <p className="card-text">Our crew will then scrape the floor with a flat metal-edge tool to knock down any standing flakes, and to smooth out the flake base coat. After we finish scraping the floor, we will vacuum it again to remove dust and debris.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-4 my-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">STEP 5 – CLEAR, DURABLE TOPCOAT APPLIED</h5>
                <div className="scrollable">
                <p className="card-text">Our crew will then apply a clear topcoat using a squeegee and then back-roll it. By doing this, we will be certain that the topcoat is even and thick throughout, leaving a durable, consistent finish.</p>
                <p className="card-text">Topcoat Requirements:</p>
                <ul className="card-text">
                  <li>12 hours to cure for light foot traffic</li>
                  <li>24 hours for daily usage</li>
                  <li>48 hours before contents can be returned to the garage</li>
                  <li>96 hours for regular vehicle traffic usage</li>
                </ul>
                <p className="card-text">The Epoxy Pros can advise you on curing times since weather and other environmental factors can cause varying curing waiting periods.</p>
                <p className="card-text">Finally, we will clean your site and load our equipment and materials back into our mobile truck.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
};
