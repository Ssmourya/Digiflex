import React from 'react';
import { Smile, Settings, TrendingUp } from 'lucide-react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph';

const OutcomesSection = () => {
    return (
        <WrapperContainer>
            <div>

                {/* Header Section */}
                <div>
                    <Heading>
                        The outcomes we deliver
                    </Heading>
                    <Subheading className='text-center'>
                            Faster product delivery cycles & increased customer satisfaction
                    </Subheading>
                    <Paragraph className='text-center'>
                        Apexon Selenium testing services deliver significant business advantages:
                    </Paragraph>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* User Satisfaction Card */}
                    <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-lg p-8 hover:border-indigo-500 transition-colors group">
                        <div className="mb-6">
                            <Smile className="w-12 h-12 text-blue-700 group-hover:text-blue-500 transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-blue-700 uppercase mb-4">
                            Increased User Satisfaction
                        </h3>
                        <p className="text-gray-600 text-lg">
                            Properly tested apps that improve user experience and satisfaction
                        </p>
                    </div>

                    {/* Operating Efficiency Card */}
                    <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-lg p-8 hover:border-indigo-500 transition-colors group">
                        <div className="mb-6">
                            <Settings className="w-12 h-12 text-blue-700 group-hover:text-blue-500 transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-blue-700 uppercase mb-4">
                            Increased Operating Efficiency
                        </h3>
                        <p className="text-gray-600 text-lg">
                            Reduced cost of implementation with pre-built platform integrations
                        </p>
                    </div>

                    {/* Revenue Card */}
                    <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-lg p-8 hover:border-indigo-500 transition-colors group">
                        <div className="mb-6">
                            <TrendingUp className="w-12 h-12 text-blue-700 group-hover:text-blue-500 transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-blue-700 uppercase mb-4">
                            Increased Revenues & Profitability
                        </h3>
                        <p className="text-gray-600 text-lg">
                            Higher customer satisfaction increases loyalty, retention, sales and profitability
                        </p>
                    </div>
                </div>
            </div>
        </WrapperContainer>
    );
};

export default OutcomesSection;