import { DownChevron } from "../../assets/icons/DownChevron"
import { DownArrow } from '../../assets/icons/DownArrow';

export const BlurredContent = () => {
  return (
    <div className="flex justify-center items-center w-full">
        <div className="flex flex-col items-center w-full">
            <div className="leading-[20px] lg:leading-[40px] text-center gradient-text bg-blurred-content font-semibold lg:text-base mt-7 w-full">
                <h4>That's it for now! We are continuously working on our roadmap capabilities and will increase our ability to show more soon!</h4>
            </div>
            <div className="lg:hidden flex flex-col items-center blur mt-10 w-full">
                <div className="border-4 rounded-md border-purpleText p-5 w-full">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <span className="font-bold lg:text-base text-purpleText">Month 4: Lorem ipsum dolor sit amet consectetur adipisicing. </span>
                            <div>
                                <button
                                    className="border-4 rounded-lg border-purpleText p-1"
                                >
                                    <DownChevron height="20px" width="20px" />
                                </button>
                            </div>
                        </div>
                        <p className="text-xs font-medium text-purpleText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sit laborum recusandae accusantium,</p>
                    </div>
                </div>
                <div className="my-1">
                    <DownArrow />
                </div>
                <div className="border-4 rounded-md border-purpleText p-5 w-full">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <span className="font-bold lg:text-base text-purpleText">Month 5: Lorem ipsum dolor sit amet consectetur adipisicing. </span>
                            <div>
                                <button
                                    className="border-4 rounded-lg border-purpleText p-1"
                                >
                                    <DownChevron height="20px" width="20px" />
                                </button>
                            </div>
                        </div>
                        <p className="text-xs font-medium text-purpleText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sit laborum recusandae accusantium,</p>
                    </div>
                </div>
                <div className="my-1">
                    <DownArrow />
                </div>
                <div className="border-4 rounded-md border-purpleText p-5 w-full">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <span className="font-bold lg:text-base text-purpleText">Month 6: Lorem ipsum dolor sit amet consectetur adipisicing. </span>
                            <div>
                                <button
                                    className="border-4 rounded-lg border-purpleText p-1"
                                >
                                    <DownChevron height="20px" width="20px" />
                                </button>
                            </div>
                        </div>
                        <p className="text-xs font-medium text-purpleText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sit laborum recusandae accusantium,</p>
                    </div>
                </div>
            </div>
            
            <div className="hidden lg:flex flex-col items-center blur mt-10 w-full">
                <div className="border-4 rounded-md border-purpleText p-5 w-full">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <span className="font-bold lg:text-base text-purpleText">Month 4: Lorem ipsum dolor sit amet consectetur adipisicing. </span>
                            <div>
                                <button
                                    className="border-4 rounded-lg border-purpleText p-1"
                                >
                                    <DownChevron height="20px" width="20px" />
                                </button>
                            </div>
                        </div>
                        <p className="text-xs font-medium text-purpleText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sit laborum recusandae accusantium, est assumenda saepe consectetur. Magnam, magni earum accusantium quis quod illo distinctio repellat!</p>
                    </div>
                </div>
                <div className="my-1">
                    <DownArrow />
                </div>
                <div className="border-4 rounded-md border-purpleText p-5 w-full">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <span className="font-bold lg:text-base text-purpleText">Month 5: Lorem ipsum dolor sit amet consectetur adipisicing. </span>
                            <div>
                                <button
                                    className="border-4 rounded-lg border-purpleText p-1"
                                >
                                    <DownChevron height="20px" width="20px"/>
                                </button>
                            </div>
                        </div>
                        <p className="text-xs font-medium text-purpleText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sit laborum recusandae accusantium, est assumenda saepe consectetur. Magnam, magni earum accusantium quis quod illo distinctio repellat!</p>
                    </div>
                </div>
                <div className="my-1">
                    <DownArrow />
                </div>
                <div className="border-4 rounded-md border-purpleText p-5 w-full">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <span className="font-bold lg:text-base text-purpleText">Month 6: Lorem ipsum dolor sit amet consectetur adipisicing. </span>
                            <div>
                                <button
                                    className="border-4 rounded-lg border-purpleText p-1"
                                >
                                    <DownChevron height="20px" width="20px"/>
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
