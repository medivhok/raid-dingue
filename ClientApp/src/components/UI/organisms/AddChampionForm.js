import React, { Component } from 'react';
import RaritySelect from '../../forms/RaritySelect';
import RoleSelect from '../../forms/RoleSelect';
import FactionSelect from '../../forms/FactionSelect';
import AffinitySelect from '../../../champions/forms/AffinitySelect';

export class AddChampionForm extends Component {
  static displayName = AddChampionForm.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <form>
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Nom</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Raret&eacute;</label>
              <div class="col-sm-9">
                <RaritySelect />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Affinit&eacute;</label>
              <div class="col-sm-9">
                <AffinitySelect />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Role</label>
              <div class="col-sm-9">
                <RoleSelect />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Faction</label>
              <div class="col-sm-9">
                <FactionSelect />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Health Points</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Attack</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Defense</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Speed</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Critical Rate</label>
              <div class="input-group col-sm-9">
                <input type="text" class="form-control" />
                <div class="input-group-postpend">
                  <div class="input-group-text">%</div>  
                </div>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Critical Damage</label>
              <div class="input-group col-sm-9">
                <input type="text" class="form-control" />
                <div class="input-group-postpend">
                  <div class="input-group-text">%</div>
                </div>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Resistance</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-3 col-form-label">Accuracy</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" />
              </div>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
  }
}

