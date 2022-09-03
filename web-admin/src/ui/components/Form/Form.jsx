import { Button, Input, Select } from '..';
import { AddContent, UpdateContent } from '../../../methods';
import { Container, Overlay, Clickable } from './Components';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeForm, CloseForm } from '../../../data/redux/FormSlice';

export default function Form() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.Form);

  if (form.Visible)
    return (
      <Overlay>
        <Clickable onClick={() => dispatch(CloseForm())} />

        <Container>
          <Input
            value={form.Content}
            onChange={(e) =>
              dispatch(ChangeForm({ Target: 'Content', Value: e.target.value }))
            }
            label='Display Content'
            placeholder='Content (eg, Verse, Hadith, Quote)'
          />

          <Input
            value={form.Reference}
            onChange={(e) =>
              dispatch(
                ChangeForm({ Target: 'Reference', Value: e.target.value })
              )
            }
            label='Reference'
            placeholder='Content Reference (eg, Al-Baqarah 2:255)'
          />

          <Input
            value={form.Website}
            onChange={(e) =>
              dispatch(ChangeForm({ Target: 'Website', Value: e.target.value }))
            }
            label='Website Link'
            placeholder='Link to the Content (eg, https://quran.com/2/255)'
          />

          <Select
            value={form.Category}
            onChange={(e) =>
              dispatch(
                ChangeForm({ Target: 'Category', Value: e.target.value })
              )
            }
            label='Content Category'
          />

          <Select
            value={form.Language}
            onChange={(e) =>
              dispatch(
                ChangeForm({ Target: 'Language', Value: e.target.value })
              )
            }
            label='Content Language'
          />

          {form.Mode === 'add' ? (
            <Button
              onClick={() => AddContent(dispatch, form)}
              text='Add Content'
            />
          ) : (
            <Button
              onClick={() => UpdateContent(dispatch, form)}
              text='Update'
            />
          )}
        </Container>
      </Overlay>
    );
}
