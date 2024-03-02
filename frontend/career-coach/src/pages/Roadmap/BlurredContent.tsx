import { DownChevron } from "../../assets/icons/DownChevron"
import { DownArrow } from '../../assets/icons/DownArrow';

export const BlurredContent = () => {
  return (
    <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
            <div className="gradient-text bg-blurred-content font-semibold text-base mt-7">
                <h4>That's it for now! We are continuously working on our roadmap capabilities and will increse our ability to show more soon!</h4>
            </div>
            <div className="flex flex-col items-center blur mt-10">
                <div className="border-4 rounded-md border-purpleText p-5">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <span className="font-bold text-base text-purpleText">Month 4: Lorem ipsum dolor sit amet consectetur adipisicing. </span>
                            <div>
                                <button
                                    className="border-4 rounded-lg border-purpleText p-1"
                                >
                                    <DownChevron />
                                </button>
                            </div>
                        </div>
                        <p className="text-xs font-medium text-purpleText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sit laborum recusandae accusantium, est assumenda saepe consectetur. Magnam, magni earum accusantium quis quod illo distinctio repellat!</p>
                    </div>
                </div>
                <div className="my-1">
                    <DownArrow />
                </div>
                <div className="border-4 rounded-md border-purpleText p-5">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <span className="font-bold text-base text-purpleText">Month 5: Lorem ipsum dolor sit amet consectetur adipisicing. </span>
                            <div>
                                <button
                                    className="border-4 rounded-lg border-purpleText p-1"
                                >
                                    <DownChevron />
                                </button>
                            </div>
                        </div>
                        <p className="text-xs font-medium text-purpleText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sit laborum recusandae accusantium, est assumenda saepe consectetur. Magnam, magni earum accusantium quis quod illo distinctio repellat!</p>
                    </div>
                </div>
                <div className="my-1">
                    <DownArrow />
                </div>
                <div className="border-4 rounded-md border-purpleText p-5">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <span className="font-bold text-base text-purpleText">Month 6: Lorem ipsum dolor sit amet consectetur adipisicing. </span>
                            <div>
                                <button
                                    className="border-4 rounded-lg border-purpleText p-1"
                                >
                                    <DownChevron />
                                </button>
                            </div>
                        </div>
                        <p className="text-xs font-medium text-purpleText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sit laborum recusandae accusantium, est assumenda saepe consectetur. Magnam, magni earum accusantium quis quod illo distinctio repellat!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
