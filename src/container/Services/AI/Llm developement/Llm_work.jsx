import React from 'react'; 
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Paragraph from '../../../../Layout/Paragraph';
import Heading from '../../../../Layout/Heading';
import Fontheading from '../../../../Layout/Fontheading';

const data = [
    "Training on Large Datasets",
    "Tokenization",
    "Transformer Architecture",
    "Context Understanding",
    "Fine-Tuning & Specialization",
    "Inference (Generating Text)",
    "Optimization Techniques"
];

function Llm_work() {
  return (
    <WrapperContainer>
      <Heading>
        <h1>How do large language models work?</h1>
      </Heading>
      
      <div className='flex flex-col md:flex-row'>
        {/* Text Section */}
        <div className='w-full md:w-1/2 px-4'>
          <Paragraph>
            Large Language Models (LLMs) work by leveraging deep learning, particularly transformer architectures, to process and generate human-like text. They are trained on vast amounts of data, allowing them to learn patterns, grammar, and context. The process begins with tokenization, where text is broken into smaller units called tokens, which are then converted into numerical representations. At the core of LLMs is the transformer model, which uses a self-attention mechanism to understand relationships between words in a sentence, enabling context-aware predictions. During inference, the model predicts the next word or phrase based on learned probabilities, iteratively forming coherent sentences. LLMs can be fine-tuned for specific tasks such as content generation, code writing, or customer support. Additionally, optimization techniques like reinforcement learning with human feedback (RLHF) improve accuracy and relevance. These models continue to evolve, becoming more efficient and capable of handling complex language-related tasks.
          </Paragraph>
        </div>
        
        {/* Responsive List Section */}
        <div className='w-full md:w-1/2 px-4 mt-6 md:mt-0 md:pl-44'>
          <ul>
            {data.map((item, index) => (
              <Fontheading key={index}>
                <li className='pb-4'>{item}</li>
              </Fontheading>
            ))}
          </ul>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Llm_work;