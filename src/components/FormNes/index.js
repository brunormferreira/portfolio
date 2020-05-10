import styled from 'styled-components';
import ContainerNes from '../ContainerNes';
import { Label } from '../FieldNes/styles';

const FormNes = styled(ContainerNes)`
  padding: var(--gap-big);
`;

const Half = styled.div`
  display: flex;
  justify-content: space-between;

  & > ${Label} {
    width: 49%;
  }
`;

export { FormNes, Half };
